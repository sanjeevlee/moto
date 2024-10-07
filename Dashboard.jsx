
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight, FaUser ,FaRegEye , FaEdit,FaFileExcel, FaFilePdf,FaFileCsv } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { GoArrowRight , GoArrowLeft } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuth } from './AuthContext';
import './Dashboard.css';
import Addusers from './Adduser';
import axios from 'axios';
import Profile from './profile';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const Dashboard = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#4e73df', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total orders</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>914</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#1cc88a', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total user</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>1,250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#36b9cc', color: 'white' }}>
            <Card.Body>
              <Card.Title>Order Delivery</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>860</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#f6c23e', color: 'white' }}>
            <Card.Body>
              <Card.Title>Active Members</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Orders Progress</Card.Title>
              <Card.Text>Here you can add a progress chart showing student performance and completion rates.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>User Enrollment</Card.Title>
              <Card.Text>Here you can add details about course enrollments, including graphs or stats.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const Users = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]); // State to track selected users
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  // const usersPerPage = 5; // Number of users per page
  const [usersPerPage, setUsersPerPage] = useState(5); // Default 5 users per page

  const sortedUsers = [...users].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination details
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
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
        selectedUsers.map((id) => axios.delete(`http://localhost:5000/api/users/${id}`))
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
  const handleDelete = async (id) => {
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
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleUsersPerPageChange = (e) => {
    setUsersPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 when changing number of users per page
  };

  // Function to download table data as Excel file
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(currentUsers.map(user => ({
      Name: user.name,
      Email: user.email,
      Phone: user.phone,
      Password: user.password
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users.xlsx");
  };

  // Function to download table data as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Name", "Email", "Phone", "Password"];
    const tableRows = currentUsers.map(user => [
      user.name, user.email, user.phone, user.password
    ]);

    doc.text("User Data", 20, 10);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    });
    doc.save("users.pdf");
  };
  const downloadCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      currentUsers.map((user, index) => ({
        S_No: index + 1,
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        // Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
        Password: user.password,
      }))
    );
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'users_data.csv');
    document.body.appendChild(link)
;
    link.click();
    document.body.removeChild(link)
;
  };
  return (
    <Container className="p-5">
      <Row className="mb-3">
        <Col md={6}>
          <h2>Users Section</h2>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
        <div>
               <label htmlFor="usersPerPage">Users per page: </label>
               <select id="usersPerPage" value={usersPerPage} onChange={handleUsersPerPageChange}>
                 <option value={5}>5</option>
                 <option value={10}>10</option>
                 <option value={15}>15</option>
                 <option value={30}>30</option>
                 <option value={300}>300</option>
               </select>
             </div>

          <Button
            variant="danger"
            onClick={handleDeleteSelected}
            disabled={selectedUsers.length === 0} // Disable if no users are selected
          >
            <RiDeleteBin6Line />
          </Button>
          <Button variant="primary" className="ms-2" onClick={downloadExcel}>
          <FaFileExcel />
          </Button>
          <Button variant="primary" className="ms-2" onClick={downloadPDF}>
          <FaFilePdf />
          </Button>
          <Button variant="primary" className="ms-2" onClick={downloadCSV} >
          <FaFileCsv />

          </Button>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          {/* Search Box */}
          <Form.Control
            type="text"
            placeholder="Search by name, email, or phone"
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
                    <td>
                      <Button
                        variant="info"
                        as={Link}
                        to={`/admin/users/view/${user._id}`}
                      >
                        <FaRegEye />
                      </Button>{' '}
                      <Button
                        variant="primary"
                        as={Link}
                        to={`/admin/users/edit/${user._id}`}
                      >
                        <FaEdit />
                      </Button>{' '}
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(user._id)}
                      >
                        <MdDelete />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      {/* Pagination Section */}
      {totalUsers > usersPerPage && (
        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Showing {Math.min(indexOfFirstUser + 1, totalUsers)} to{' '}
              {Math.min(indexOfLastUser, totalUsers)} of {totalUsers} users
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Button
              variant="secondary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="me-2"
            >
              <GoArrowLeft />
            </Button>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
             <GoArrowRight />
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
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '' });
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch the user data when the component is mounted
  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${id}`);
          if (response.data) {
            console.log("User data fetched:", response.data); // Debugging
            setUser(response.data); // Set the user data in the state
          } else {
            setError("User not found");
          }
        } catch (error) {
          console.error("Error fetching user:", error.response?.data || error.message);
          setError("Failed to load user data. Please try again.");
        } finally {
          setIsLoading(false); // Stop the loading state
        }
      };
      fetchUser();
    } else {
      setIsLoading(false); // If no ID, we're adding a new user
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (viewMode) return; // Prevent submission in view mode
    try {
      if (id) {
        const response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
        const updatedUsers = users.map(u => (u._id === id ? response.data : u));
        setUsers(updatedUsers); // Update the user list in the parent component
      } else {
        const response = await axios.post('http://localhost:5000/api/users', user);
        setUsers([response.data, ...users]); 
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
            readOnly={viewMode}
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
            readOnly={viewMode}
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
            readOnly={viewMode}
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
            readOnly={viewMode}
          />
        </Form.Group>
              {/* {/ Back to Manage Users Button /} */}
              {viewMode && (
          <Button variant="secondary" className="mt-3" onClick={handleBack}>
            Back to Manage Users
          </Button>
        )}
        {!viewMode && (
          <Button variant="secondary" type="submit" className="mt-3">
            {id ? 'Update User' : 'Add User'}
          </Button>
        )}
      </Form>
    </Container>
  );
};

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/allusers');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  const handleLogout = () =>{
     navigate('/login');
  };
  const handleShopRedirect = () => {
    // Redirect to the home page
    navigate('/Project');
  };
  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fc' }}>
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <Navbar.Brand style={{ color: '#e42e0c', fontWeight: '800', fontSize: '28px' }}>
        MOTO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {/* Admin Dropdown with Icon */}
          <Dropdown align="end">
            <Dropdown.Toggle
              variant="secondary"
              id="admin-dropdown"
              className="d-flex align-items-center text-white custom-dropdown-toggle"
            >
              <FaUser className="me-2" />
              Admin
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/admin/profile">Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleShopRedirect}> My Shop</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
    <Row>
      <Col md={2} className="sidebar">
        <Nav className="flex-column">
          <div className="sidebar-section">
            <FaBars className="icon" />
            <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
            <FaChevronRight className="arrow-icon" />
          </div>
          <div className="sidebar-section">
            <FaBars className="icon" />
            <Dropdown>
              <Dropdown.Toggle className="custom-dropdown-toggle text-white dropdown-toggle">
                Users
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: '#f8f9fc' }}>
              <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
               
              </Dropdown.Menu>
            </Dropdown>
            
          </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/orders" className="text-white">Orders</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/tabels" className="text-white">Tabels</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/forms" className="text-white">Forms</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/review" className="text-white">Review</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/settings" className="text-white">Settings</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
          </Nav>
        </Col>
        <Col md={10}>
          <Routes>
          <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/view/:id" element={<EditUser users={users} setUsers={setUsers} viewMode={true} />} />
            <Route path="/profile" element={<Profile />} />

            {/* <Route path="/login" element={<Login />} /> Ensure you have a Login component */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
