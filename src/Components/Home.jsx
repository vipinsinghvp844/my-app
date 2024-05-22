import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import ModalButton from "./Modalbutton.jsx";
import Mycarousel from "./Homecarousell.jsx";
import Mycarousel2 from "./Homecaroousell2.jsx";
import Recentnews from "./Recentnewses.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-img-container">
        {/* Background image */}

        <Container
          style={{
            height: "655px",
            maxHeight: "655px",
          }}
        >
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* First Column */}
            <Col md={6}>
              <div className="content">
                <h1
                  style={{
                    color: "#000000",
                    fontSize: "50px",
                    fontWeight: "600",
                    fontFamily: "poppins,sans-serif",
                    lineHeight: "52px",
                  }}
                >
                  Manage Business Documents, Client Data, & Workflows
                </h1>
                <p
                  style={{
                    letterSpacing: "0.25px",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "poppins,sans-serif",
                    lineHeight: "26px",
                    marginBottom: "20px",
                    color: "#5c5c5c",
                    padding: "35px 60px 0px 0px",
                  }}
                >
                  Docusoft provides fully customisable, versatile and easy to
                  implement solutions for practice management and business
                  operation automation.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "35px",
                  }}
                >
                  <Button variant="primary" className="FreeDemobtn">
                    Free Demo
                  </Button>
                  <ModalButton />
                </div>
              </div>
            </Col>
            {/* Second Column */}
            <Col md={6}>
              <div className="img-container">
                {/* Image */}
                <img
                  className="content-img"
                  src="src\assets\banner front image.png"
                  alt="Content"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center Oursoftware">
            <h1>Our Software Solutions</h1>
            <p>
              We have built an enviable range of cloud-based software solutions
              to meet the needs of accountants and insolvency practitioners, and
              other financial services professionals. If you are looking for a
              software solution to resolve a specific issue that is holding you
              back, then get in contact to find out how we can help you!
            </p>
          </Col>
        </Row>
      </Container>
      <Mycarousel />

      <Mycarousel2 />

      <Container>
        <Row>
          {/* First Column */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="src\assets\Home left side 4992.png"
              alt="Content"
              className="content-img"
            />
          </Col>
          {/* Second Column */}
          <Col md={6}>
            <div className="content">
              <h2>Our Software Solutions</h2>
              <p>
                Docusoft works with financial services professionals to develop
                software and create an innovative solution; document management,
                cloud file storage, client data management, workflow processes,
                data protection, file sharing, and document delivery, and
                electronic signatures are among the issues we address. Together,
                we develop the best software solutions for accountants,
                insolvency practitioners, financial and business advisers and
                other professional services businesses across the world.
              </p>
              <h3>
                <img
                  className="checkicon"
                  src="src\assets\check-icon.png"
                  alt="check"
                />
                Easy to get started
              </h3>
              <p className="checkpara">
                Our solutions are easy-to-use and are designed to match
                interfaces that most people are familiar with.
              </p>
              <h3>
                <img
                  className="checkicon"
                  src="src\assets\check-icon.png"
                  alt="check"
                />
                Reliable
              </h3>
              <p className="checkpara">
                Docusoft has been working with Accountancy and Insolvency
                practitioners for the last 2 decades and we constantly seek
                feedbacks and implement features to evolve our solutions with
                industry trends.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="primary"
                  className="FreeDemobtn"
                  style={{ marginTop: "20px" }}
                >
                  Know More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="Cloudfliler">
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>Docusoft CloudFiler</h1>
            <p>
              Docusoft CloudFiler gives you the best cloud document management
              solution to manage your business communications and records. With
              tools to index and file, create, automate and process, users can
              easily search and retrieve their business documents, use OCR
              search features and review documents, all from any web browser!
              Users can even send PDF forms to complete on-line and send
              contracts and other business documents securely and have them
              signed electronically.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row>
          {/* First Column */}
          <Col md={7} className="d-flex  align-items-start">
            <img
              src="src\assets\Home-page fade mid.jpg"
              alt="Content"
              className="content-img"
              width={600}
              height={475}
            />
          </Col>
          {/* Second Column */}
          <Col md={5}>
            <div className="content2">
              <div className="cardmaking">
                <h3>
                  <img
                    className="checkicon"
                    src="src\assets\mobile.png"
                    alt=""
                  />
                  Central repository
                </h3>
                <p className="checkpara2">
                  Docusoft CloudFiler enables you to store all your documents at
                  a central repository on the cloud so your whole team can
                  access them with ease and with a high level of control and
                  security.
                </p>
              </div>
              <div className=" cardmaking">
                <h3>
                  <img
                    className="checkicon"
                    src="src\assets\tools.png"
                    alt="tools"
                  />
                  Cross Platform
                </h3>

                <p className="checkpara2">
                  Access your documents anywhere on any device as CloudFiler is
                  compatible on your office workstations, your laptops, tablets
                  and even on your smartphone!
                </p>
              </div>
              <div className="cardmaking">
                <h3>
                  <img
                    className="checkicon"
                    src="src\assets\tool.png"
                    alt="tool"
                  />
                  Wide range of tools
                </h3>

                <p className="checkpara2">
                  The CloudFiler packs a number of tools in one system so you
                  have all the tools you will need to manage your documents and
                  we also integrate with most accounting and insolvency
                  software.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="Clientportal">
        <div className="container">
          <Row className="align-item-center">
            <Col md={6} d-flex justify-content-center>
              <div>
                <h1>Client Portal</h1>
                <p>
                  Get your contracts and documents signed in seconds! Docusoft
                  client Portal protects client confidential data by sending
                  documents securely, for remote approval and e-signature, with
                  one click! Docusoft CloudFiler Client Portal also includes
                  features for secure document distribution and also our
                  document request feature to ease the pains of onboarding new
                  clients and employees. Docusoft’s Portal is the flexible
                  document delivery service for anyone who needs fast and secure
                  document delivery, remote approval and electronic signature.
                  Your Clients can also send documents to you too!!
                </p>
              </div>
              <ModalButton />
            </Col>
            <Col md={6}>
              <img
                src="src\assets\portalLAPTOP.png"
                alt=""
                width={548}
                height={413}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Recentnews />

      <Container className="WebsiteHosting9">
        <Row>
          {/* First Column */}
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="src\assets\mobile img Home.png"
              alt="Content"
              className="content-img"
            />
          </Col>
          {/* Second Column */}
          <Col md={6} className="d-flex align-items-center">
            <div className="content">
              <h2>Data Protection All The Facts At Your Fingertips</h2>
              <p>
                Creating commercially viable and cost-effective solutions to
                data protection compliance. Outsourced Data Protection Officer
                and GDPR Article 27 Representative services specifically
                designed to make compliance simple and help you build trust with
                your clients.
              </p>
              <div>
                <Button variant="primary" className="Biggbuttonhome">
                  Contact Us For More Information And Your Free Consultation
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col className="text-center Oursoftware">
            <h1>Website, Hosting and Digital Services</h1>
            <p style={{ textAlign: "justify" }}>
              In addition to the exceptional range of cloud-based software
              solutions that meet the needs of accountants, insolvency
              practitioners and other financial services professionals, we also
              offer a range of specialist-hosted services. If you are thinking
              about updating your existing website or developing a new one, if
              you are thinking about launching a new mobile app, or if you need
              assistance with digital marketing or social media management, then
              our digital marketing services can help you! Discover more about
              our digital services for your practice.
            </p>

            <Button variant="primary" className="FreeDemobtn">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=" justify-content-center gap-5">
          <Col className="d-flex align-items-center DesCodDel">
            <Link to={`/About/`}>
              <div className="d-flex align-items-center ">
                <img
                  src="src\assets\Home bottom computer.png"
                  alt="Design, development"
                />
                <h4>Design, development & wire-framing</h4>
              </div>
            </Link>
          </Col>

          <Col className="d-flex align-items-center DesCodDel">
            <Link to={`/About/`}>
              <div className="d-flex align-items-center ">
                <img
                  src="src\assets\Home bottomeye.png"
                  alt="Coding & testing"
                />
                <h4>Coding & testing</h4>
              </div>
            </Link>
          </Col>
          <Col className="d-flex align-items-center DesCodDel">
            <Link to={`/About/`}>
              <div className="d-flex align-items-center ">
                <img
                  src="src\assets\Home bottomboy.png"
                  alt="Delivery & ongoing support"
                />
                <h4>Delivery & ongoing support</h4>
              </div>
            </Link>
          </Col>
          <Row className=" mb-5">
            <Col className="d-flex justify-content-center">
              <img
                src="src\assets\servicebg.png"
                alt="Service bg"
                width={800}
              />
            </Col>
          </Row>
        </Row>
      </Container>

      <Container fluid className="bg-image-row">
        <Container>
          {/* Bottom Section with Background */}
          <Row>
            <Col
              md={7}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ fontSize: "50px" }}>Download Our App Now!</h2>
                <p>
                  Docusoft mobile application is available for both Android and
                  iOS. Your documents on CloudFiler and Portal can be accessed
                  on the fly. You can also view your Client details keeping your
                  business data accessible to you anytime, anywhere!
                </p>
                <div className=" app-store-images mt-4">
                  <div style={{ marginBottom: "15px" }}>
                    <Image
                      src="src\assets\app store.png"
                      alt="App Store"
                      className="mr-3"
                    />
                    <Image
                      src="src\assets\google play.png"
                      alt="Google Play Store"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <Image
                src="src\assets\xpracticeapp.png.pagespeed.ic.d_e-WNQ5FK HOME 2Bottom.png"
                alt="App Screenshot"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;
