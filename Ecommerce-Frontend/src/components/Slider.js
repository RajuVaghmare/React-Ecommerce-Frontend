import React from 'react';
import { Card, Button, Carousel, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Styles/Home.css'; // Import styles

import image1 from './products_images/black_dress.jpeg';
import image2 from './products_images/download.jpg';
import image3 from './products_images/kids_suit.jpeg';
import image4 from './products_images/plain_shirt.jpeg';

function Slider() {
  return (
    <>
      {/* Container for the Slider component */}
      <div className='Slider'>
        {/* Heading for the featured products */}
        <h2 className='featuredProducts'>Featured products</h2>
        
        <Carousel>
          
          {/* Carousel Item 1 */}
          <Carousel.Item>
            <Container fluid>
              <Row>
                {/* Mapping over an array of products to create cards */}
                {[
                  { image: image1, title: 'Black dress', price: '$15' },
                  { image: image2, title: 'Hoodie', price: '$15' },
                  { image: image3, title: 'Kids suit', price: '$15' },
                  { image: image4, title: 'Shirt', price: '$15' },
                ].map((product, index) => (
                  <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    {/* Bootstrap Card component for each product */}
                    <Card style={{ width: '18rem'}}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>{product.price}</Card.Title>
                        <Card.Text>
                          Buy this dress..Solid fit & flare dress
                        </Card.Text>
                        <Button
                          variant=""
                          style={{
                            backgroundColor: 'rgb(225, 247, 77)',
                            fontWeight: 'bold',
                          }}
                        >
                          {/* FontAwesome icon for the shopping cart */}
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{
                              marginRight: '8px',
                              fontWeight: 'bold',
                            }}
                          />
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

          {/* Carousel Item 2 */}
          <Carousel.Item>
            <Container fluid>
              <Row className="">
                {/* Mapping over an array of products to create cards */}
                {[
                  { image: image3, title: 'Kids suit', price: '$15' },
                  { image: image4, title: 'Shirt', price: '$15' },
                  { image: image1, title: 'Black dress', price: '$15' },
                  { image: image2, title: 'Hoodie', price: '$15' },
                ].map((product, index) => (
                  <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    {/* Bootstrap Card component for each product */}
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>{product.price}</Card.Title>
                        <Card.Text>
                          Buy this dress..Solid fit & flare dress
                        </Card.Text>
                        <Button
                          variant=""
                          style={{
                            backgroundColor: 'rgb(225, 247, 77)',
                            fontWeight: 'bold',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{
                              marginRight: '8px',
                              fontWeight: 'bold',
                            }}
                          />
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>

          {/* Carousel Item 3 */}
          <Carousel.Item>
            <Container fluid>
              <Row>
                {/* Mapping over an array of products to create cards */}
                {[
                  { image: image4, title: 'Shirt', price: '$15' },
                  { image: image1, title: 'Black dress', price: '$15' },
                  { image: image2, title: 'Hoodie', price: '$15' },
                  { image: image3, title: 'Kids suit', price: '$15' },
                ].map((product, index) => (
                  <Col key={index} xs={6} sm={6} md={4} lg={3}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>{product.price}</Card.Title>
                        <Card.Text>
                          Buy this dress..Solid fit & flare dress
                        </Card.Text>
                        
                        <Button
                          variant=""
                          style={{
                            backgroundColor: 'rgb(225, 247, 77)',
                            fontWeight: 'bold',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            style={{
                              marginRight: '8px',
                              fontWeight: 'bold',
                            }}
                          />
                          Add to cart
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

// Export the Slider component to use in other parts of the application
export default Slider;
