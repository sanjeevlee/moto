// import React, { useState, useEffect } from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card, Form, Table, Dropdown, Image } from 'react-bootstrap';
// import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
// import { MdSpaceDashboard } from "react-icons/md";
// import { FaChevronRight } from "react-icons/fa";
// import { TbReportSearch } from "react-icons/tb";
// import { MdDelete } from "react-icons/md";
// import { FaEye } from "react-icons/fa";
// import { Line, Bar } from 'react-chartjs-2';
// import axios from 'axios';
// import moment from 'moment'; // For date formatting
// import { FaFilePdf } from "react-icons/fa";
// import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
// import { FaFileCsv } from "react-icons/fa6";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';
// import './Adminpannel.css'
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import * as XLSX from 'xlsx';


// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement
// );

// // Dashboard Component
// const Dashboard = () => {
//   // Data for charts
//   const lineChartData = {
//     labels: ['April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Sales',
//         data: [100, 200, 400, 300, 500, 400, 600, 700, 800],
//         fill: false,
//         backgroundColor: '#28a745',
//         borderColor: '#28a745',
//       },
//     ],
//   };

//   const barChartData = {
//     labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
//     datasets: [
//       {
//         label: 'Website Views',
//         data: [50, 20, 30, 15, 60, 30, 45],
//         backgroundColor: '#007bff',
//       },
//     ],
//   };

//   return (
//     <Container fluid className="p-5">
//       <Row >
//         <Col md={3} className='dash'>
//           <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Categories</Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'black' }}>1,255</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products</Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'black' }}>250</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Products Sold</Card.Title>
//               <Card.Text style={{ fontSize: '2rem', color: 'black' }}>960</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/ //fullwidth /}
//       {/ <Card className='pro mt-5'> /}
//       <Container className="p-4">
//         <Row>
//           <Col md={7}>
//             <Card className="mb-4">
//               <Card.Header>
//                 <h5>Sales by Country</h5>
//               </Card.Header>
//               <Card.Body>
//                 <Table responsive>
//                   <thead>
//                     <tr>
//                       <th>Country</th>
//                       <th>Sales</th>
//                       <th>Value</th>
//                       <th>Bounce</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>United States</td>
//                       <td>2500</td>
//                       <td>$230,900</td>
//                       <td>29.9%</td>
//                     </tr>
//                     <tr>
//                       <td>Germany</td>
//                       <td>3900</td>
//                       <td>$440,000</td>
//                       <td>40.22%</td>
//                     </tr>
//                     <tr>
//                       <td>Great Britain</td>
//                       <td>1400</td>
//                       <td>$190,700</td>
//                       <td>23.44%</td>
//                     </tr>
//                     <tr>
//                       <td>Brazil</td>
//                       <td>562</td>
//                       <td>$143,960</td>
//                       <td>32.14%</td>
//                     </tr>
//                   </tbody>
//                 </Table>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={5}>
//             {/* {/ Map Placeholder /} */}
//             <div className="map-placeholder">
//               {/ <h5>Map</h5> /}
//               <Image src="./../Images/ww.jpg" className='wwimag' />
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Header>Website Views</Card.Header>
//               <Card.Body>
//                 <Bar data={barChartData} />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Header>Daily Sales</Card.Header>
//               <Card.Body>
//                 <Line data={lineChartData} />
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={4}>
//             <Card className="mb-4">
//               <Card.Header>Completed Tasks</Card.Header>
//               <Card.Body>
//                 <Line data={lineChartData} />
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// };






// const EditUser = ({ users, setUsers }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     confirmPassword: '',
//     date: new Date().toISOString().split('T')[0], // Default to today’s date
//     image: '', // New field for storing base64 image
//   });

//   useEffect(() => {
//     if (id)
//  {
//       const existingUser = users.find((u) => u._id === id);
//       if (existingUser) {
//         setUser({
//           ...existingUser,
//           date: moment(existingUser.date).format('YYYY-MM-DD'),
//         });
//       } else {
//         navigate('/admin/users/manageuser');
//       }
//     }
//   }, [id, users, navigate]);


//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     const maxSizeInMB = 2; // Set the limit to 2MB or adjust to any other size
//     const maxSizeInBytes = maxSizeInMB  1024  1024;

//     // Allowed MIME types for JPEG and PNG
//     const allowedTypes = ['image/jpeg', 'image/png'];

//     if (file) {
//       // Check file type
//       if (!allowedTypes.includes(file.type)) {
//         alert('Only JPEG and PNG images are allowed.');
//         return;
//       }

//       // Check file size
//       if (file.size > maxSizeInBytes) {
//         alert(`File size should not exceed ${maxSizeInMB}MB.`);
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setUser({ ...user, image: reader.result }); // Save base64 image
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure the password and confirmPassword fields match
//     // if (user.password !== user.confirmPassword) {
//     //   window.alert('Passwords do not match');
//     //   return;
//     // }

//     try {
//       const formattedUser = {
//         ...user,
//         date: moment.utc(user.date, 'YYYY-MM-DD').toISOString(),
//       };

//       if (id)
//  {
//         // Update existing user
//         await axios.put(`http://localhost:5000/edituser/${id}`, formattedUser);
//         const updatedUsers = users.map((u) =>
//           u._id === id ? { ...formattedUser, date: moment(formattedUser.date).format('YYYY-MM-DD') } : u
//         );
//         setUsers(updatedUsers);
//         window.alert('User updated successfully!');
//       } else {
//         // Add new user
//         const response = await axios.post('http://localhost:5000/adduser', formattedUser);
//         setUsers((prevUsers) => [response.data, ...prevUsers]);
//         window.alert('User Added Successfully!');
//       }

//       // Redirect after submission
//       navigate('/admin/users/manageuser');
//     } catch (err) {
//       console.error('Error saving user:', err);
//     }
//   };




//   return (
//     <Container className="signclass">
//       <Row className="signrow">
//         <Col>
//           <h6 className="addnew mt-2">{id ? 'Edit User' : 'Add New User'}</h6>
//           <Form onSubmit={handleSubmit} className="mt-3">
//             <Form.Group className="name">
//               <Form.Label>Upload Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageUpload}
//                 className="nametext"
//               />
//               {user.image && (
//                 <div className="mt-3">
//                   <img src={user.image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />
//                 </div>
//               )}
//             </Form.Group>



//             <Form.Group controlId="name" className="mt-3 name">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Name"
//                 value={user.name}
//                 onChange={(e) => setUser({ ...user, name: e.target.value })}
//                 required
//                 className="nametext"
//               />
//             </Form.Group>

//             <Form.Group controlId="email" className="mt-3 name">
//               <Form.Label>Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email Address"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 required
//                 className="nametext"
//               />
//             </Form.Group>

//             <Form.Group className="mt-3 name">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control
//                 type="tel"
//                 value={user.phone}
//                 onChange={(e) => setUser({ ...user, phone: e.target.value })}
//                 placeholder="Enter Phone number"
//                 required
//                 className="nametext"
//               />
//             </Form.Group>

//             <Form.Group controlId="password" className="mt-3 name">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 value={user.password}
//                 onChange={(e) => setUser({ ...user, password: e.target.value })}
//                 required
//                 className="nametext"
//               />
//             </Form.Group>

//             <Form.Group className="mt-3 name">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={user.confirmPassword}
//                 onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//                 required
//                 className="nametext"
//               />
//             </Form.Group>

//             {/* {/ Date Field /} */}
//             <Form.Group className="mt-3 name">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={user.date}
//                 onChange={(e) => setUser({ ...user, date: e.target.value })}
//                 required
//                 className="nametext"
//               />
//             </Form.Group>
//             <Button type="submit" className="w-100 mt-3 addbutton">
//               {id ? 'Save Changes' : 'Add User'}
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };


// const AllUsers = ({ users, setUsers }) =>{
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage, setUsersPerPage] = useState(5); // Default 5 users per page

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         setUsers(response.data.reverse()); // Reverse the array to have the newest at the top
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };
//     fetchUsers();
//   }, [setUsers]);

//   const handleDelete = async (id)
//  => {
//     const confirmed = window.confirm('Are you sure you want to delete this user?');
//     if (!confirmed) return;

//     try {
//       await axios.delete(`http://localhost:5000/users/${id}`);
//       setUsers(users.filter((user) => user._id !== id));
//     } catch (err) {
//       console.error('Error deleting user:', err);
//     }
//   };

//   const handleBulkDelete = async () => {
//     const confirmed = window.confirm('Are you sure you want to delete the selected users?');
//     if (!confirmed) return;

//     try {
//       await Promise.all(selectedUsers.map((id)
//  => axios.delete(`http://localhost:5000/users/${id}`)));
//       setUsers(users.filter((user) => !selectedUsers.includes(user._id)));
//       setSelectedUsers([]);
//     } catch (err) {
//       console.error('Error deleting users:', err);
//     }
//   };

//   const handleSelectUser = (id)
//  => {
//     setSelectedUsers((prevSelected) =>
//       prevSelected.includes(id)
//  ? prevSelected.filter((userId) => userId !== id) : [...prevSelected, id]
//     );
//   };

//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       setSelectedUsers(users.map((user) => user._id));
//     } else {
//       setSelectedUsers([]);
//     }
//   };

//   const handleViewUser = (user) => {
//     const userDetails = `
//       Name: ${user.name}
//       Email: ${user.email}
//       Phone: ${user.phone}
//       Date: ${user.date}
//       Password: ${user.password}
//       Confirm Password: ${user.confirmPassword}
//     `;
//     window.alert(userDetails);
//   };

//   const filteredUsers = users.filter((user) => {
//     const userDate = new Date(user.date);
//     const from = fromDate ? new Date(fromDate) : null;
//     const to = toDate ? new Date(toDate) : null;

//     return (
//       (!from || userDate >= from) &&
//       (!to || userDate <= to) &&
//       ((user.name && user.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.email && user.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (user.phone && user.phone.includes(searchQuery)))
//     );
//   });

//   // Pagination logic
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleUsersPerPageChange = (e) => {
//     setUsersPerPage(parseInt(e.target.value, 10));
//     setCurrentPage(1); // Reset to page 1 when changing number of users per page
//   };

//   // PDF Export
//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const tableData = currentUsers.map((user, index) => [

//       index + 1,
//       user.name,
//       user.email,
//       user.phone,
//       moment.utc(user.date).local().format('DD/MM/YYYY'),
//       user.password,
//     ]);

//     doc.autoTable({
//       head: [['S.No', 'Name', 'Email', 'Phone', 'Date', 'Password']],
//       body: tableData,
//     });
//     doc.save('users_data.pdf');
//   };

//   // const downloadPDF = () => {
//   //   const doc = new jsPDF();
  
//   //   const tableData = currentUsers.map((user, index) => {
//   //     const imgData = user.image ? user.image : ''; // If no image, leave blank
  
//   //     return [
//   //       index + 1,
//   //       imgData, // Add the image data to the table
//   //       user.name,
//   //       user.email,
//   //       user.phone,
//   //       moment.utc(user.date).local().format('DD/MM/YYYY'),
//   //       user.password
       
//   //     ];
//   //   });
  
//   //   doc.autoTable({
//   //     head: [['S.No', 'Image','Name', 'Email', 'Phone', 'Date', 'Password']],
//   //     body: tableData,
//   //     didDrawCell: (data) => {
//   //       if (data.column.index === 6 && data.cell.raw) { // Column index 6 for images
//   //         doc.addImage(data.cell.raw, 'JPEG', data.cell.x + 2, data.cell.y + 2, 15, 15); // Adjust image size and position
//   //       }
//   //     }
//   //   });
  
//   //   doc.save('users_data.pdf');
//   // };
  



//   // Excel Export
 
 
//   const downloadExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(
//       currentUsers.map((user, index) => ({
//         S_No: index + 1,
//         Name: user.name,
//         Email: user.email,
//         Phone: user.phone,
//         Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
//         Password: user.password,
//       }))
//     );
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
//     XLSX.writeFile(workbook, 'users_data.xlsx');
//   };
//   // const downloadExcel = () => {
//   //   const worksheet = XLSX.utils.json_to_sheet(
//   //     currentUsers.map((user, index) => ({
//   //       S_No: index + 1,
//   //       Image_URL: user.image || 'No Image', // Add the image URL
//   //       Name: user.name,
//   //       Email: user.email,
//   //       Phone: user.phone,
//   //       Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
//   //       Password: user.password
       
//   //     }))
//   //   );
  
//   //   const workbook = XLSX.utils.book_new();
//   //   XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
//   //   XLSX.writeFile(workbook, 'users_data.xlsx');
//   // };
  

//   // CSV Export
//   const downloadCSV = () => {
//     const worksheet = XLSX.utils.json_to_sheet(
//       currentUsers.map((user, index) => ({
//         S_No: index + 1,
//         Name: user.name,
//         Email: user.email,
//         Phone: user.phone,
//         Date: moment.utc(user.date).local().format('DD/MM/YYYY'),
//         Password: user.password,
//       }))
//     );
//     const csv = XLSX.utils.sheet_to_csv(worksheet);
//     const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.setAttribute('href', url);
//     link.setAttribute('download', 'users_data.csv');
//     document.body.appendChild(link)
// ;
//     link.click();
//     document.body.removeChild(link)
// ;
//   };

 
  

//   return (
//     <Container className="manage-products-container p-5">
//       <Row>
//         <Col md={12}>
//           {selectedUsers.length > 0 && (
//              <Button variant="danger" className="bulkdelete" onClick={handleBulkDelete}>
//              Delete Selected ({selectedUsers.length})
//            </Button>
//          )}
//          <h2 className="text-left manageuser">Manage Users</h2>
//          <div className='down mt-4'>
//            <div className="filter-container">
//              <input
//                type="text"
//                placeholder="Search by name, email, or phone number"
//                value={searchQuery}
//                onChange={(e) => setSearchQuery(e.target.value)}
//                className="searchbar"
//              />

//              {/ Date Range Filter /}
//              <div className="date-filter ">
//                From Date
//                <Form.Control
//                  type="date"
//                  value={fromDate}
//                  onChange={(e) => setFromDate(e.target.value)}
//                  placeholder="From Date"
//                  className="date searchbar"
//                />
//                To Date
//                <Form.Control
//                  type="date"
//                  value={toDate}
//                  onChange={(e) => setToDate(e.target.value)}
//                  placeholder="To Date"
//                  className="date searchbar"
//                />
//              </div>

//              {/* {/ Users Per Page Dropdown /} */}
//              <div>
//                <label htmlFor="usersPerPage">Users per page: </label>
//                <select id="usersPerPage" value={usersPerPage} onChange={handleUsersPerPageChange}>
//                  <option value={5}>5</option>
//                  <option value={10}>10</option>
//                  <option value={15}>15</option>
//                  <option value={30}>30</option>
//                </select>
//              </div>

//              {/* {/ Icons for PDF, Excel, CSV /} */}
//              <div className="icons">
//                <FaFilePdf className="pdf-icon" onClick={downloadPDF} />
//                <PiMicrosoftExcelLogoFill className="excel-icon" onClick={downloadExcel} />
//                <FaFileCsv className="csv-icon" onClick={downloadCSV} />
//              </div>
//            </div>
//          </div>

//          {/* {/ User Table /} */}
//          <Table striped bordered hover className="product-table mt-3">
//            <thead>
//              <tr>
//                <th>
//                  <input
//                    type="checkbox"
//                    onChange={handleSelectAll}
//                    checked={selectedUsers.length === users.length}
//                  />
//                </th>
//                <th>S.No</th>
//                <th>Image</th>
//                <th>Name</th>
//                <th>Email</th>
//                <th>Phone</th>
//                <th>Date</th>
//                <th>Password</th>
//                <th>Actions</th>
//              </tr>
//            </thead>
//            <tbody>
//              {currentUsers.map((user, index) => (
//                <tr key={user._id}>
//                  <td>
//                    <input
//                      type="checkbox"
//                      checked={selectedUsers.includes(user._id)}
//                      onChange={() => handleSelectUser(user._id)}
//                    />
//                  </td>
//                  <td>{indexOfFirstUser + index + 1}</td>
//                  <td>
//                    {user.image ? (
//                      <img src={user.image} alt="user" style={{ width: '50px', height: '50px' }} />
//                    ) : (
//                      'No Image'
//                    )}
//                  </td>
//                  <td>{user.name}</td>
//                  <td>{user.email}</td>
//                  <td>{user.phone}</td>
//                  <td>{moment.utc(user.date).local().format('DD/MM/YYYY')}</td>
//                  <td>{user.password}</td>
//                  <td>
//                    <Button variant="secondary" className="mx-1" onClick={() => handleViewUser(user)}>
//                      View
//                    </Button>
//                    <Button as={Link} to={`/admin/users/edituser/${user._id}`} variant="primary" className="mr-2">
//                      Edit
//                    </Button>
//                    <Button variant="danger" onClick={() => handleDelete(user._id)} className="mx-1">
//                      Delete
//                    </Button>
//                  </td>
//                </tr>
//              ))}
//            </tbody>
//          </Table>

//          {/* {/ Pagination Controls /} */}
//          <div className="pagination">
//            {Array.from({ length: totalPages }, (_, index) => (
//              <Button
//                key={index + 1}
//                onClick={() => handlePageChange(index + 1)}
//                variant={index + 1 === currentPage ? 'primary' : 'secondary'}
//                className="mx-1"
//              >
//                {index + 1}
//              </Button>
//            ))}
//          </div>
//        </Col>
//      </Row>
//    </Container>
//  );
// };

// // export default AllUsers;

// const Reports = () => <h2 className="p-5">Overall-Reports Section</h2>;


// // Admin Panel Component
// const AdminPanel = () => {
//  const [users, setUsers] = useState([
//    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
//    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '2345678901', password: 'password234', confirmPassword: 'password234' }

//  ]);
//  const navigate = useNavigate();

//  const handleLogout = () => {
//    navigate('/login');
//  };

//  return (
//    <Container fluid className="p-0" style={{ backgroundColor: 'white' }}>
//      <Navbar id="navebar" expand="lg" className="px-5">
//        <Navbar.Brand style={{ color: 'white', fontSize: '1.6rem' }}>Admin Panel</Navbar.Brand>
//        <Navbar.Toggle aria-controls="basic-navbar-nav" />
//        <Navbar.Collapse id="basic-navbar-nav">
//          <Nav className="ms-auto">
//            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
//            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
//          </Nav>
//        </Navbar.Collapse>
//      </Navbar>
//      <Row>
//        <Col md={2} className="sidebar">
//          <Nav className="flex-column">
//            <div className="sidebar-section">
//              <MdSpaceDashboard className="icon" />
//              <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
//              <FaChevronRight className="arrow-icon" />
//            </div>
//            <Dropdown>
//              <Dropdown.Toggle id="dropdown-basic">Users</Dropdown.Toggle>
//              <Dropdown.Menu>
//                <Dropdown.Item as={Link} to="/admin/users/addnew">Add New User</Dropdown.Item>
//                <Dropdown.Item as={Link} to="/admin/users/manageuser">Manage User</Dropdown.Item>
//              </Dropdown.Menu>
//            </Dropdown>
//            <div className="sidebar-section">
//              <TbReportSearch className="icon" />
//              <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
//              <FaChevronRight className="arrow-icon" />
//            </div>
//          </Nav>
//        </Col>
//        <Col md={10}>
//          <Routes>
//            <Route path="/" element={<Dashboard />} />
//            <Route path="/users/addnew" element={<EditUser users={users} setUsers={setUsers} />} />
//            <Route path="/users/edituser/:id" element={<EditUser users={users} setUsers={setUsers} />} />
//            <Route path="/users/manageuser" element={<AllUsers users={users} setUsers={setUsers} />} />
//            <Route path="/reports" element={<Reports />} />
//          </Routes>

//        </Col>
//      </Row>
//    </Container>
//  );
// };

// export default AdminPanel;