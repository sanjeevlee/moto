
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './Dashboard.css';
import axios from 'axios'; // Axios for API requests

// Dashboard Component
const Dashboard = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Courses</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>25</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>1,250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
            <Card.Body>
              <Card.Title>Assignments done</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>860</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ffa500', color: 'white' }}>
            <Card.Body>
              <Card.Title>Active Instructors</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Users Component with Search and Pagination
const Users = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]); // State to track selected users
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const usersPerPage = 5; // Number of users per page

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.password.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.confirmPassword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle individual checkbox change
  const handleCheckboxChange = (id)=> {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(id)

        ? prevSelected.filter((userId) => userId !== id) // Deselect
        : [...prevSelected, id] // Select
    );
  };

  // Handle master checkbox change
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map((user) => user._id)); // Select all users on current page
    } else {
      setSelectedUsers([]); // Deselect all users
    }
  };

  // Handle delete button for selected users
  const handleDeleteSelected = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete the selected users?"
    );
    if (!confirmed) return; // Exit if the user cancels

    try {
      await Promise.all(
        selectedUsers.map((id)=>axios.delete(`http://localhost:5000/api/users/${id}`)
        )
      );
      const updatedUsers = users.filter((user) => !selectedUsers.includes(user._id));
      setUsers(updatedUsers);
      setSelectedUsers([]); // Clear selected users after deletion

      // Adjust current page if necessary
      if (currentPage > Math.ceil(updatedUsers.length / usersPerPage)) {
        setCurrentPage(Math.max(currentPage - 1, 1));
      }
    } catch (error) {
      console.error("Error deleting users:", error.response?.data || error.message);
      alert("Failed to delete selected users. Please try again.");
    }
  };

  // Handle individual delete
  const handleDelete = async (id)=> {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);

      // Adjust current page if necessary
      if (currentPage > Math.ceil(updatedUsers.length / usersPerPage)) {
        setCurrentPage(Math.max(currentPage - 1, 1));
      }
    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
      alert("Failed to delete user. Please try again.");
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle page change
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Container className="p-5">
      <Row className="mb-3">
        <Col md={6}>
          <h2>Users Section</h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button
            variant="danger"
            onClick={handleDeleteSelected}
            disabled={selectedUsers.length === 0} // Disable if no users are selected
          >
            Delete Selected
          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          {/* {/ Search Box /} */}
          <Form.Control
            type="text"
            placeholder="Search by name, email, phone, password, confirm password"
            value={searchTerm}
            onChange={handleSearchChange} // Update search term on change
          />
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      currentUsers.length > 0 &&
                      selectedUsers.length === currentUsers.length
                    } // Select all if all users on current page are selected
                  />
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={selectedUsers.includes(user._id)} // Check if the user is selected
                        onChange={() => handleCheckboxChange(user._id)}
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.password}</td>
                    <td>{user.confirmPassword}</td>
                    <td>
                      <Button variant="info" as={Link} to={`/admin/users/view/${user._id}`}>
                        View
                      </Button>{' '}
                      <Button variant="primary" as={Link} to={`/admin/users/edit/${user._id}`}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" onClick={() => handleDelete(user._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* {/ Pagination Section /} */}
      {totalUsers > usersPerPage && (
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Showing {Math.min(indexOfFirstUser + 1, totalUsers)} to {Math.min(indexOfLastUser, totalUsers)} of {totalUsers} users
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Button
              variant="secondary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="me-2"
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

// EditUser Component
const EditUser = ({ users, setUsers, viewMode = false }) => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch the user data when the component is mounted
  useEffect(() => {
    if (id)
 {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${id}`);
          console.log("User data fetched:", response.data); // Debugging
          setUser(response.data); // Set the user data in the state
        } catch (error) {
          console.error("Error fetching user:", error.response?.data || error.message);
          setError("Failed to load user data. Please try again.");
        } finally {
          setIsLoading(false); // Set loading to false after the request
        }
      };
      fetchUser();
    } else {
      setIsLoading(false); // If not editing, we are adding a new user, so we can stop loading immediately
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (viewMode) return; // Prevent submission in view mode
    try {
      if (id)
 {
        const response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
        const updatedUsers = users.map(u => (u._id === id ? response.data : u));
        setUsers(updatedUsers); // Update the user list in the parent component
      } else {
        const response = await axios.post('http://localhost:5000/api/users', user);
        setUsers([response.data, ...users]); // Add a new user to the top of the list
      }
      navigate('/admin/users/manage'); // Navigate back to the manage users page
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error.message);
      setError("Failed to save user data. Please try again."); // Set error state
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleBack = () => {
    navigate('/admin/users/manage'); // Navigate back to Manage Users
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching the user data
  }

  if (error) {
    return <div>{error}</div>; // Display any error that occurs during data fetching
  }

  return (
    <Container className="p-5">
      <h2>{viewMode ? 'View User' : id ? 'Edit User' : 'Add User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            disabled={viewMode} // Disable if in view mode
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            disabled={viewMode} // Disable if in view mode
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            disabled={viewMode} // Disable if in view mode
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            disabled={viewMode} // Disable if in view mode
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            disabled={viewMode} // Disable if in view mode
          />
        </Form.Group>
        {/* {/ Back to Manage Users Button /} */}
        {viewMode && (
          <Button variant="secondary" className="mt-3" onClick={handleBack}>
            Back to Manage Users
          </Button>
        )}
        {!viewMode && (
          <Button variant="success" type="submit" className="mt-3">
            {id ? 'Update User' : 'Add User'}
          </Button>
        )}
      </Form>
    </Container>
  );
};

// AdminPanel Component
const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar bg="success" variant="light" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: '#00bfff' }}>Admin Panel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/admin/courses" className="text-white">Courses</Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="text-white">
                Users
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/courses" className="text-white">Courses</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Dropdown>
                <Dropdown.Toggle className="text-white dropdown-toggle">Users</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <FaChevronRight className="arrow-iconi" />
            </div>
          </Nav>
        </Col>
        <Col md={10} className="p-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/view/:id" element={<EditUser users={users} setUsers={setUsers} viewMode={true} />} />
            {/* {/ Add other routes here as needed /} */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;