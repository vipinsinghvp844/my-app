import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./PricingQuotation.module.css";

function PricingQuotation() {
  return (
    <Container>
      <Row>
        <Col md={12} className={style["TopHeading"]}>
          <h1 className="text-center">Pricing Quotation</h1>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col md={6}>
          <div className={style["FFAPTM"]}>
            <h4>
              
                FFAP™ is a fixed fee pricing system that enables any practice of
                any size to set prices that reflect:-
              
            </h4>

            <p>
              {" "}
              <i class="bi bi-check"></i>Your geographic location
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>The size of your practice
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>The quality of the books and records
              that the client supplies to you
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>The size or volumes of activity of the
              client
            </p>

            <h5>
              The product prices for not only compliance services but also
            </h5>

            <p>
              {" "}
              <i class="bi bi-check"></i>Tax planning work
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>Consultancy services
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>Financial Management services
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>Sundry services
            </p>
            <p>
              {" "}
              <i class="bi bi-check"></i>Third-party products and services
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className={style["BannerImage"]}>
          <img
            src="src\assets\Pricingquotationbanner.png"
            alt="Pricing Quotation"
            />
            </div>
          <Button variant="primary" className="FreeDemobtn">
                    Call to Arrange a Demo
                  </Button>
        </Col>
      </Row>
      <Row>
        <div>
          <p>It even contains a micro service budget for those items that often slip through uncharged such as VAT registration or mortgage references. If you or your team give it away, make sure you let the client know it has a value at least!!</p>
          <p>Increase your fee income and profits by up selling and cross selling products and services. Add value to your client and show them what they really can get for their money. A client who buys based on value rather than just on price will always be the best of your clients. Remember if a client joins you on price they will leave you on price!!</p>
          <p>Research shows that 68% of customers change suppliers because of ‘perceived indifference’ so show them your differentiating factor. Show them how much you care about them. Remember that further research shows that in the UK 80% of customers don’t complain, they just walk away!</p>
          <p>Explain what you do and let the customer decide what they want to buy. YOU NEVER NEED TO SELL AGAIN!!</p>
          <p>Accountants don’t like selling…but we do like systems, so follow the FFAP system and sign up the client trouble-free.</p>
          <p>FFAP Accountants Marketing System™ is an integrated Fixed Fee Pricing tool and a ready made marketing collateral system for accountants in the UK. Within a few minutes of installing the software your practice can have a range of colour brochures carrying your own logo and branding available to display in your offices or to print out or display at any location.</p>
          <p>In addition to the product brochures you have access to a range of Power Plans™ that will assist you in up selling your services through a series of questions to help the client fully understand the benefits of your services and why they should buy into more than just compliance accounting from you.</p>
          <p>You can add links to any third party products that you choose to promote through your practice, whether it is fee protection, HR systems, paperless office solutions or employee benefits. You can link direct to the website or a contact detail sheet (in an easily printable Word document format). Now you can really earn a lot of passive income through introductions to those third party alliances that you work with in a properly systemised marketing process.</p>
          <p>PowerPoint shows can be accessed from the menu system to promote your or the third party products with just a single mouse click.</p>
          <p>We will shortly be adding video training modules to the software, so that your SME clients can access a bank of short sound bites on business matters that you can help them with while simultaneously providing added value services. Imagine how this will empower your practice compared to your competitors!</p>
          <p>The FFAP™ software is simple to use. We offer a full money back guarantee if you are unable to use it to increase fees in your first year of use!</p>
        </div>
      </Row>
    </Container>
  );
}

export default PricingQuotation;
