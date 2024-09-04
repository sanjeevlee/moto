// import React, { useState } from 'react';

// const ImageUploader = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleRemoveImage = () => {
//     setImage(null);
//   };

//   return (
//     <div className="image-uploader">
//       {image ? (
//         <div className="image-preview">
//           <img src={image} alt="Uploaded" style={{Width: '40%', height: '40px' }} />
//           <button onClick={handleRemoveImage} className="remove-btn">Upload Another Image</button>
//         </div>
//       ) : (
//         <div className="upload-container">
//           <input type="file" accept="image/*" onChange={handleImageChange} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploader;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import foodData from './foods.json';

const PopularFoods = () => {
  const { categories, foods } = foodData;

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Popular Goods Foods</h2>
      <p className="text-center">Search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
      <Row className="justify-content-center mb-4">
        {categories.map((category, index) => (
          <Col key={index} md={2} className="text-center font-weight-bold">
            <a href="#" className={category === "Biryani & Meat" ? "text-danger" : "text-dark"}>
              {category}
            </a>
          </Col>
        ))}
      </Row>
      <Row>
        {foods.map((food, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={food.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.description}</Card.Text>
                <Button variant="danger" className="mt-auto">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularFoods;
