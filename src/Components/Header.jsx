import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className={`fixed-top ${isScrolled ? "scrolled" : ""}`}
    >
      <Navbar.Brand>
        <div className="d-flex align-items-center">
        <div style={{width:'106px'}}>
        <img
          src="src/assets/20year.png"
          className={`d-inline-block ${isScrolled ? "scrolled-logo" : ""}`}
          alt="Logo"
          />
        </div>
        <div>
        <Link to="/">
          <img
            src="src/assets/Docusoft-logo-red.png"
            className={`d-inline-block H20year ${isScrolled ? "scrolled-logo" : ""}`}
            alt="Logo"
          />
          </Link>
          </div>
          </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Nav className="mx-auto menushift">
          <NavDropdown
            className="menucoloR"
            title="About Us"
            id="about-us-dropdown"
            show={showDropdown}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <div className="dropdownitemm">
              <NavDropdown.Item as={Link} to="/about" >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ourevents">
                Our Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/clienttestimonials">
                Client Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ourpartners">
                Our Partners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ourlinks">
                Our Links
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/current-openings">
                Current Openings
              </NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown
            className="menucoloR"
            title="Sectors"
            id="sectors-dropdown"
            show={showDropdown2}
            onMouseEnter={() => setShowDropdown2(true)}
            onMouseLeave={() => setShowDropdown2(false)}
          >
            <div className="dropdownitemm">
            <NavDropdown.Item as={Link} to="/sectors" >
              Sectors
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/accountancy">
              Accountancy
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/business-recovery">
              Business Recovery
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/construction">
              Construction
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/distribution">
              Distribution
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/financial-services">
              Financial Services
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/individual">
              Individual
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/legal-firms">
              Legal Firms
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/manufacturing">
              Manufacturing
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/medical-healthcare">
              Medical and Healthcare
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/property-management">
              Property Management
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/recruitment">
              Recruitment
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/retail">
              Retail
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/sectors/schools-universities">
              Schools and Universities
              </NavDropdown.Item>
              </div>
          </NavDropdown>
          <NavDropdown
            className="menucoloR"
            title="Solutions"
            id="solutions-dropdown"
            show={showDropdown3}
            onMouseEnter={() => setShowDropdown3(true)}
            onMouseLeave={() => setShowDropdown3(false)}
          >
            <div className="dropdownitemm">
            <NavDropdown.Item as={Link} to="/customerrelationship">
              Customer Relationship
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/documentmanagement">
              Document Management
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/practiceapp">
              Practice App
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pricing-quotation">
              Pricing Quotation
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/questions-answers">
              Questions & Answers
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/secureportal">
              Secure Portal
              </NavDropdown.Item>
              </div>
          </NavDropdown>
          <div className="menucoloR d-flex">
          <Nav.Link as={Link} to="/posts">
            Blog
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={Link} to="/support">
            Support
            </Nav.Link>
            </div>
        </Nav>
        <Button className="Loginbtnn" variant="primary">
          Login
        </Button>
      
    </Navbar>
  );
}

export default Header;
