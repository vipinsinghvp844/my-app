import React, { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";


function Mycarousel2() {
  const [hovered, setHovered] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Row className="justify-content-center mt-4">
        <Col className="text-center Trustedworldwide2">
          <h2>Our Software Solutions</h2>
          <Carousel controls={hovered} indicators={true}>
            <Carousel.Item>
              <div className="d-flex justify-content-between carousellimg">
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\clientdata.svg"
                    alt="Client Data"
                  />
                  <h3>Client Data</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\dms.svg "
                    alt="DMS"
                  />
                  <h3>DMS</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\portal.svg"
                    alt="Third slide"
                  />
                  <h3>Portel</h3>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between carousellimg">
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\practice.svg"
                    alt="Practice"
                  />
                  <h3>Practice Quote</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\formfiller.svg"
                    alt="Formfiller"
                  />
                  <h3>PDF Form Filler</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\docudrive.svg"
                    alt="Docudrive"
                  />
                  <h3>Docu Drive</h3>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between carousellimg">
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\amlcheck.svg"
                    alt="AML checker"
                  />
                  <h3>AML Checker</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\gdpr-1.svg"
                    alt="GDPR"
                  />
                  <h3>GDPR Manager</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\companyhouse.svg"
                    alt="Docudrive"
                  />
                  <div>
                    <h3>Company House Contact</h3>
                    </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between carousellimg">
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\sign.svg"
                    alt="Sign"
                  />
                  <h3>Docusoft Sign</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\practiceapp.svg"
                    alt="Practice app"
                  />
                  <h3>Practice App</h3>
                </div>
                <div>
                  <img
                    className="d-block w-200 h-200"
                    src="src\assets\mobileapp-1.svg"
                    alt="Mobileapp"
                  />
                  <h3>CloudFiler Mobile App</h3>
                </div>
              </div>
            </Carousel.Item>

            {/* Add more Carousel.Items for more sets of images */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Mycarousel2;
