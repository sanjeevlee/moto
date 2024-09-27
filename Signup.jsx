import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        
      });

      const result = await response.json();

      if (!response.ok) {
       
        alert(result.message);
        return;
      }

      alert('User registered successfully');
      navigate('/project');  
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={5}>
          <Card className="p-4 shadow">
            <Card.Body>
              <div className="title">WELCOME TO <a href="/" className="text-4xl font-extrabold text-[#e42e0c]">MOTO</a></div>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 3,
                        message: 'Name must be at least 3 characters long',
                      },
                    })}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name && errors.name.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formNumber" className="mb-3">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone number"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/,
                        message: 'Enter a valid phone number',
                      },
                    })}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone && errors.phone.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="youremail@gmail.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email && errors.email.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-4 position-relative">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="********"
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters long',
                        },
                      })}
                      isInvalid={!!errors.password}
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y pe-3"
                      style={{ cursor: 'pointer' }}
                      onMouseEnter={() => setPasswordVisible(true)}
                      onMouseLeave={() => setPasswordVisible(false)}
                    >
                      {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <Form.Control.Feedback type="invalid">
                      {errors.password && errors.password.message}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center mt-3">
              Already have an account? <a href="/signin" className='text-[blue]'>Sign In</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
