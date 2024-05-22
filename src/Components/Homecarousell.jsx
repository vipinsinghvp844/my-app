import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


function Mycarousel() {
  const [hovered, setHovered] = useState(false);

  return (
    <Container onMouseEnter={ () => setHovered(true)}
      onMouseLeave={ () => setHovered(false)}>
      <Row className="justify-content-center mt-4">
        <Col className="text-center Trustedworldwide2 ">
          <h2>Trusted Worldwide By Financial Professionals</h2>
           <Carousel controls={hovered} indicators={false}>
      <Carousel.Item>
        <div className="d-flex justify-content-between carousellitem1">
          <img
            className="d-block w-200 h-90"
            src="src\assets\xhaines-watts-min.png.pagespeed.ic.3HXVy5fhYE.png"
            alt="First slide"
          />
          <img
            className="d-block w-200 h-90"
            src="src\assets\download.png"
            alt="Second slide"
          />
          <img
            className="d-block w-200 h-90"
            src="src\assets\xaabrs-min.png.pagespeed.ic.zVGi63jP-2.png"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-between carousellitem1">
          <img
            className="d-block w-200 h-90"
            src="src\assets\xcarterclark-min.png.pagespeed.ic.KNIy8BohcA.png"
            alt="Fourth slide"
          />
          </div>
      </Carousel.Item>
      {/* Add more Carousel.Items for more sets of images */}
    </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Mycarousel;
