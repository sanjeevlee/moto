
import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './Dashboard.css';
import Addusers from './Adduser';

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

const User = () => <h2 className="p-5">User Section</h2>;
const Orders = () => <h2 className="p-5">Orders Section</h2>;
const Tabels = () => <h2 className="p-5">Tables Section</h2>;
const Forms = () => <h2 className="p-5">Forms Section</h2>;
const Review = () => <h2 className="p-5">Review Section</h2>;
const Settings = () => <h2 className="p-5">Settings Section</h2>;

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/LoginPage'); // Redirect to login page
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
            <Nav.Link href="#" style={{ color: '#f8f9fc' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} className="ms-3 custom-logout-btn"> Logout</Button>
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
              <Nav.Link as={Link} to="/admin/user" className="text-white">User</Nav.Link>
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
            <Route path="/Addusers" element={<Addusers />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/tabels" element={<Tabels />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/review" element={<Review />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
