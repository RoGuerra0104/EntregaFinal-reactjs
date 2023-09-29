import React from 'react';

import ItemCount from '../ItemCount/ItemCount';


import Card from 'react-bootstrap/Card';


import "./ItemDetailContainer.css"

import Carousel from 'react-bootstrap/Carousel';


const ItemDetailContainer = ({ productData }) => {


  return (
    <Card className='card'>

      <Carousel data-bs-theme="dark">        
          {productData.images.map((image, index) => (
            <Carousel.Item>
            <img
              key={index}
              className="d-block w-100"
              src={image}
              alt="First slide"
            /></Carousel.Item>
          ))
          }
      </Carousel>

      <Card.Body>
        <Card.Title className="cardTitle">{productData.title}</Card.Title>
        <Card.Text className="cardTitle">
          {productData.description}
        </Card.Text>
        <Card.Text className="cardTitle">
          Unidades disponibles: {productData.stock}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="cardFooter">
        <p className="cardSmall">${productData.price}</p>
      </Card.Footer>
      <Card.Body>
        <ItemCount />



      </Card.Body>
    </Card>

  )
}

export default ItemDetailContainer

