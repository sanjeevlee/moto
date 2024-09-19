
import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight, FaUser } from 'react-icons/fa';
import { useAuth } from './AuthContext';
import './Dashboard.css';
import Addusers from './Adduser';
import axios from 'axios';
import Profile from './profile';

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

// Users Component
const Users = ({ users, setUsers }) => {
  const handleDelete = (id)=> {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Container className="p-5">
      <Row>
        <Col md={12}>
          <h2>Users Section</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td>
                  <td>
                    <Button variant="primary" as={Link} to={`/admin/users/edit/${user.id}`}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

// EditUser Component
const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  useEffect(() => {
    if (id)
 {
      const existingUser = users.find(user => user.id === parseInt(id));
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id)
 {
      // Edit existing user
      const updatedUsers = users.map(u => (u.id === parseInt(id)
 ? user : u));
      setUsers(updatedUsers);
    } else {
      // Add new user
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    navigate('/admin/users/manage');
  };

  return (
    <Container className="p-5">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
        </Form.Group>
        <Button variant="secondary" type="submit" className="mt-3">
          {id ? 'Update User' : 'Add User'}
        </Button>
      </Form>
    </Container>
  );
};

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:1425/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () =>{
    // Remove token from local storage or session storage
    localStorage.removeItem('auth_token'); // Or sessionStorage.removeItem('auth_token');
    
    // Optionally, clear any user-specific data from state/context
    // You can do something like setUser(null) if you're using context
  
    // Redirect the user to the login page
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
                <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
                <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FaChevronRight className="arrow-icon" />
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
            <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/courses" element={<h2 className="p-5">Courses Section</h2>} />
            <Route path="/instructors" element={<h2 className="p-5">Instructors Section</h2>} />
            <Route path="/reports" element={<h2 className="p-5">Reports Section</h2>} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/login" element={<Login />} /> Ensure you have a Login component */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
