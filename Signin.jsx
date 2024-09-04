// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// const SignIn = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#fff' }}>
//       <Row className="w-100 justify-content-center">
//         <Col md={8} lg={5}>
//           <Card className="p-4 shadow-smanimate__animated animate__slideInLeft" 
//             onAnimationEnd={() => {
//               document.body.style.overflow = 'auto';
//             }}
//           >
//             <Card.Body>
//               <div className="title">WELCOME TO  <a href="/" className="text-4xl font-extrabold text-[#e42e0c]">MOTO</a></div>
//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 <Form.Group controlId="formEmail" className="mb-3">
//                   <Form.Label>E-Mail</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="youremail@gmail.com"
//                     {...register('email', {
//                       required: 'Email is required',
//                       pattern: {
//                         value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                         message: 'Enter a valid email address',
//                       },
//                     })}
//                     isInvalid={!!errors.email}
//                   />
//                   <Form.Control.Feedback type="invalid">
//                     {errors.email && errors.email.message}
//                   </Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group controlId="formPassword" className="mb-4 position-relative">
//                   <Form.Label>Password</Form.Label>
//                   <div className="position-relative">
//                     <Form.Control
//                       type={passwordVisible ? 'text' : 'password'}
//                       placeholder="********"
//                       {...register('password', {
//                         required: 'Password is required',
//                         minLength: {
//                           value: 6,
//                           message: 'Password must be at least 6 characters long',
//                         },
//                       })}
//                       isInvalid={!!errors.password}/>
                      
//                     <span
//                       className="position-absolute top-50 end-0 translate-middle-y pe-3"
//                       style={{ cursor: 'pointer' }}
//                       onMouseEnter={() => setPasswordVisible(true)}
//                       onMouseLeave={() => setPasswordVisible(false)}
//                     >
//                       {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                     <Form.Control.Feedback type="invalid">
//                       {errors.password && errors.password.message}
//                     </Form.Control.Feedback>
//                   </div>
//                 </Form.Group>

//                 <Button variant="primary" type="submit" className="w-100">
//                   Sign In
//                 </Button>
//               </Form>
//             </Card.Body>
//             <Card.Footer className="text-center mt-3">
//               Don't have an account? <a href="/signup" className='text-[blue]'>Sign Up</a>
//             </Card.Footer>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignIn;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Handle success (e.g., redirect, show a success message, etc.)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#fff' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={5}>
          <Card className="p-4 shadow-sm animate__animated animate__slideInLeft">
            <Card.Body>
              <div className="title">WELCOME TO  <a href="/" className="text-4xl font-extrabold text-[#e42e0c]">MOTO</a></div>
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                      isInvalid={!!errors.password}/>
                      
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

                <Button  type="submit" className="w-100">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center mt-3">
              Don't have an account? <a href="/signup" className='text-[blue]'>Sign Up</a>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
