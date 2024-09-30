import React from "react";
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const stateCityData = {
    Tamilnadu: ["Coimbatore", "Chennai", "Salem"],
    Kerala: ["Kochi", "Palakkad", "Trivandrum"],
    Karnataka: ["Bangalore", "Mysore", "Chikmagalur"],
    Coimbatore: ["Peelamedu", "Funmall", "Hopes", "Sitra"],
  };

  const [State, setState] = useState('');
  const [cities, setCities] = useState([]);

  const handleStateChange = (e) => {
    const State = e.target.value;
    setState(State);
    setCities(stateCityData[State]);
  };

  const registerOptions = {
    name: {
      required: "Name is required",
      pattern: {
        value: /^[a-zA-Z ]{2,30}$/,
        message: "Enter a valid name"
      }
    },
    username: { 
      required: "Username is required" 
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        message: "Invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Invalid password"
      }
    },
    number: {
      required: "Number is required",
      pattern: {
        value: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,
        message: "Invalid phone number"
      }
    },
    gender: {
      required: "Gender is required",
    },
    terms: {
      required: 'Please accept the terms and conditions',
    },
    state: {
      required: "State is required"
    },
    city: {
      required: "City is required"
    }
  };

  return (
    <div className="container">
              <div className="title">WELCOME TO  <a href="/" className="text-4xl font-extrabold text-[#e42e0c]">MOTO</a></div>
              <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="user-details">
          <Row>
            <Col>
              <div>
                <label className="details">Name</label>
                <input name="name" type="text" className="input" placeholder="Enter your name" {...register('name', registerOptions.name)} /><br />
                <div className="text-danger">
                  {errors?.name && errors.name.message}
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <label className="details">UserName</label>
                <input
                  type="username"
                  name="username"
                  className="input"
                  placeholder="Enter your username"
                  {...register('username', registerOptions.username)} /><br />
                <div className="text-danger">
                  {errors?.username && errors.username.message}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                <label className="details">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter your email"
                  {...register('email', registerOptions.email)} /><br />
                <div className="text-danger">
                  {errors?.email && errors.email.message}
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <label className="details">Phone Number</label>
                <input
                  type="text"
                  name="number"
                  className="input"
                  placeholder="Enter your phone number"
                  {...register('number', registerOptions.number)} /><br />
                <div className="text-danger">
                  {errors?.number && errors.number.message}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div>
                <label className="details">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Enter your password"
                  {...register('password', registerOptions.password)} /><br />
                <div className="text-danger">
                  {errors?.password && errors.password.message}
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <label className="details">Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  className="input"
                  placeholder="Confirm your password"
                  {...register('cpassword', registerOptions.password)} /><br />
                <div className="text-danger">
                  {errors?.password && errors.password.message}
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <label className="details">Select State:</label>
              <select
                {...register('state', registerOptions.state)}
                value={State}
                onChange={handleStateChange}
                className="input">
                <option value="">Select State</option>
                {Object.keys(stateCityData).map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <div className="text-danger">
                {errors?.state && errors.state.message}
              </div>
            </Col>
            <Col>
              <label className="details">Select City:</label>
              <select
                {...register('city', registerOptions.city)}
               
                className="input">
                <option value=""  disabled={!State}>Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <div className="text-danger">
                {errors?.city && errors.city.message}
              </div>
            </Col>
          </Row>
          <br />
        </div>
       
        <div className="file-upload">
          <label htmlFor="photoUpload" className="file-label">
            Select Photo:
          </label>
          <input
            type="file"
            id="photoUpload"
            className="input"
            accept="image/*"
          />
        </div><br/>
        <Row>
          <Col>
          <label className="rad">Gender:
            <input type="radio" name="gender" className="radi" value="male" {...register('gender', registerOptions.gender)} />Male
            <input type="radio" name="gender" className="radi" value="female" {...register('gender', registerOptions.gender)} />Female
            <input type="radio" name="gender" className="radi" value="other" {...register('gender', registerOptions.gender)} />Other
          </label>
          <div className="text-danger">
            {errors?.gender && errors.gender.message}
          </div>
          </Col>
            <Col>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  className="check"
                  {...register('terms', registerOptions.terms)} />
                Accept Terms and Conditions
              </label>
              <div className="text-danger">
                {errors?.terms && errors.terms.message}
              </div>
            </div>
          </Col>
        </Row>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;