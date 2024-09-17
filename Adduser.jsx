import React, { useState } from 'react';
import './App.css'; // Add your custom styles if necessary
import 'bootstrap/dist/css/bootstrap.min.css';

function Addusers() {
  const [users, setUsers] = useState([
    // { id: 1, firstName: "Genevieve", lastName: "Blind", dob: "1/24/1996", country: "Afghanistan", phone: "2268978063", age: 82 },
    // { id: 2, firstName: "Caroline", lastName: "Haddock", dob: "12/5/1989", country: "Afghanistan", phone: "8251841635", age: 52 },
    // Add more user data here
  ]);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    country: "",
    phone: "",
    age: ""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value
    });
  };

  // Function to add a new user
  const addUser = () => {
    if (newUser.firstName && newUser.lastName && newUser.dob) {
      setUsers([
        ...users,
        { id: users.length + 1, ...newUser }
      ]);
      // Reset the new user form
      setNewUser({
        firstName: "",
        lastName: "",
        dob: "",
        country: "",
        phone: "",
        age: ""
      });
    }
  };

  // Function to delete a user
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Function to sort users by column
  const sortTable = (key) => {
    const sortedUsers = [...users].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setUsers(sortedUsers);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">User Table</h1>

      <table className="table table-bordered table-hover mt-4">
        <thead>
          <tr>
            <th onClick={() => sortTable("id")}>ID</th>
            <th onClick={() => sortTable("Name")}>Name</th>
            <th onClick={() => sortTable("Phone Number")}>PhoneNumber</th>
            <th onClick={() => sortTable("Email")}>Email</th>
            <th onClick={() => sortTable("Password")}>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.dob}</td>
              <td>{user.country}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add User Form */}
      <div className="mt-4">
        <h2>Add New User</h2>
        <form>
          <div className="form-row">
            <div className="form-group col-md-3">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="First Name"
                value={newUser.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Last Name"
                value={newUser.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="date"
                name="dob"
                className="form-control"
                placeholder="Date of Birth"
                value={newUser.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Country"
                value={newUser.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={newUser.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <input
                type="number"
                name="age"
                className="form-control"
                placeholder="Age"
                value={newUser.age}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button type="button" className="btn btn-primary mt-2" onClick={addUser}>Add User</button>
        </form>
      </div>
    </div>
  );
}

export default Addusers;
