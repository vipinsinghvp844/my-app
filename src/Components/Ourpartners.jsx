import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import style from "./Ourpartners.module.css";
import {Link} from 'react-router-dom'

const Ourpartners = () => {
  return (
        <Container className="pb-5">
          <Row>
            <Col md={12} className={style["TopHeading"]}>
              <h1 className="text-center">Our Partners</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6} className={style["Leftheadingtext"]}>
              <h2>
                Partnering with Businesses Delivering Innovative Solutions
              </h2>
              <p>
                <br/>Docusoft continues to develop and offer the best document
                management solutions in the software market, delivering great
                value and service to all its customers and partners alike.{" "}
                <br />
                <br />
                Our aim is to develop and distribute software that is easy to
                use and implement. Much of what we are able to achieve is done
                with a little help from partners and the people we work with.
                Our partners are an integral part of our Document and
                Information Management cloud solutions eco-system.
              </p>
            </Col>
            <Col md={6} className={style["BannerImage"]}>
              <img src="src\assets\ourpartnersbanner.webp" alt="Our Partners" />
            </Col>
          </Row>
          <Row className="">
            <Col md={12} className={style["middilealltext"]}>
              <p>
                The growing requirements in the small to medium sized business
                sector means there are very few solutions that actually fit the
                needs and budgets of these businesses. So, if you are working
                with small to medium sized businesses, you will know your
                customers requirements to manage and store many different types
                of electronic documents and information. If you are finding it
                difficult to find the right software, Docusoft CloudFiler
                provides the answer! It is easy-to-use, it is a true cloud-based
                document management solution accessible via a web browser! By
                offering a structured application yet customisable solution,
                CloudFiler makes your business documents available, anywhere, at
                any-time, from any device.
              </p>
              <p>
                Docusoft works closely with all our partners to make it easy for
                your customers to switch to, what we think is, the best
                cloud-based document management system available. Take a look at
                our solution so we can help you convince your customers to start
                using our cloud-based document management solution!{" "}
                <Link to={"/contact"}>
                  <strong>CONTACT US TO ARRANGE A DEMONSTRATION.</strong>
                </Link>
              </p>
              <h1>Who We Work With</h1>
              <div className={style["Imgwithpara"]}>
              <p>
                The following list highlights some of our key partners and the
                solutions we integrate with
              </p>
              <img src="src\assets\ourespn.png" alt="Espon" width={104}/>
              <p>
                Find out about the exceptional range of business scanners
                available from Epson
              </p>
              <img src="src\assets\ourvision.png" alt="Visionblue" width={138}/>
              <p>
                Vision Blue are a customer-focused provider of compliant and
                efficient software solutions for the Credit and Debt Recovery
                sectors
              </p>
              <img src="src\assets\ourmicrosoft.png" alt="Microsoft" width={146} />
              <p>
                As a Registered Microsoft Partner, we have access to information
                and briefings to help ensure Docusoft is kept up-to-date with
                the latest releases of Windows, Server and Office software.
              </p>
              <img src="src\assets\ourxero.png" alt="Xero" width={82}/>
              <p>
                Online accounting software – Xero gives you the insights to plan
                for the future of your business
              </p>
              <img src="src\assets\ourqwickbook.png" alt="Quickbooks" width={175}/>
              <p>Online accounting software –</p>
              <strong>
                <p>Turnkey Computer Technology Ltd (TCTL) </p>
              </strong>
              <p><a href="https://www.turnkey-ips.com/" target="_blank">
                TURNKEY IPS – TCTL are market-leading providers of software to
                  the IP and Business Recovery profession.
                  </a>
              </p>
                <img src="src\assets\ourwolters.png" alt="Wolters" width={ 180} />
              <p>Accounting software</p>
              <img src="src\assets\ourtd.png" alt="TD" width={141}/>
                <p>Accounting software -.</p>
                <img src="src\assets\Oursage.png" alt="Sage" width={121}/>
              <p>Accounting software -.</p>
              <img src="src\assets\ourDocuSoft.png" alt="DocuSoft" width={154}/>
                <p>Home & Office Furniture</p>
                </div>
            </Col>
          </Row>
        </Container>
  );
};

export default Ourpartners;
