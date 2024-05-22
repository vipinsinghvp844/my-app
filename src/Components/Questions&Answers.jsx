import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./PricingQuotation.module.css";
import {Link} from 'react-router-dom'

function QuestionsAnswers() {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleItem = (itemIndex) => {
    if (expandedItem === itemIndex) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemIndex);
    }
  };

  return (
    <Container className="mb-2">
      <Row>
        <Col md={12} className={style["TopHeading"]}>
          <h1 className="text-center">Pricing Quotation</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded={expandedItem === 1}
                  aria-controls="collapseOne"
                  onClick={() => toggleItem(1)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 1 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                  What is Document Management?
                </button>
              </h2>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  expandedItem === 1 ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}>
                  <p>Sometimes referred to as the ‘Paperless Office’, Document
                  Management is a comprehensive solution to managing
                  information. It principally incorporates all the components
                  necessary to capture paper, emails and electronic files, and
                  manage the storage and retrieval of all this information in an
                      easy-to-use system. <Link to={'/documentmanagement'} >Document Management solutions</Link> may include
                  as standard a workflow (routing) system so that information
                  can be delivered to the right people at the right time, an
                  audit trail which automatically records all activity,
                  integration capabilities to allow easy access to/from
                  line-of-business systems, and security to guarantee access by
                      authorised users and make sure nothing can be deleted.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded={expandedItem === 2}
                  aria-controls="collapseTwo"
                  onClick={() => toggleItem(2)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 2 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                  Why Document Management?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  expandedItem === 2 ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}>
                  <p>Document Management delivers benefits to businesses in a
                  number of ways. Its main aim and deliverable is to save time
                      and money and it achieves this by:</p>
                    </div>
                  <div className={style["FFAPTM"]}>
                  <p><i class="bi bi-check"></i>Providing access to all documents using powerful search options</p>
                  <p><i class="bi bi-check"></i>Eliminating lost files</p>
                  <p><i class="bi bi-check"></i>Reducing file storage</p>
                  <p><i class="bi bi-check"></i>Managing E-Mails and storing them automatically alongside paper documents</p>
                  <p><i class="bi bi-check"></i>Enhancing compliance</p>
                  <p><i class="bi bi-check"></i>Improving business processes and client service</p>
                    <p><i class="bi bi-check"></i>Delivering security</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded={expandedItem === 3}
                  aria-controls="collapseThree"
                  onClick={() => toggleItem(3)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 3 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                 What do I need?
                </button>
              </h2>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${
                  expandedItem === 3 ? "show" : ""
                }`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}>
                    <p><strong>Docusoft</strong> only requires a server and a scanner – and our software to be installed, of course. We recommend as a minimum Microsoft Windows Server 2003/8 with MS-SQL Server (or MSDE) and adequate storage space (10GB for example) to accommodate 20,000 client files. <strong>Docusoft</strong> operates on thick or thin clients (via Terminal Services or Citrix), and supports any TWAIN compliant scanner or networked MFD.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded={expandedItem === 4}
                  aria-controls="collapseFour"
                  onClick={() => toggleItem(4)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 4 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                  Is it difficult to use?
                </button>
              </h2>
              <div
                id="collapseFour"
                className={`accordion-collapse collapse ${
                  expandedItem === 4 ? "show" : ""
                }`}
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}><p>
                    <strong>Docusoft</strong> is very ease to use – training is achieved in 2 hours and as no documents can be deleted we are confident that users are operational in a very short time and can quickly develop confidence in their usage and knowledge of <strong>Docusoft</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded={expandedItem === 5}
                  aria-controls="collapseFive"
                  onClick={() => toggleItem(5)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 5 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                  How is it possible to measure the success?
                </button>
              </h2>
              <div
                id="collapseFive"
                className={`accordion-collapse collapse ${
                  expandedItem === 5 ? "show" : ""
                }`}
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}><p>
                    Using <strong>Docusoft</strong> all documents (emails, paper, Word, Excel, etc.) can be filed and retrieved quickly. This means that paper storage will reduce, paper filing and lost files will no longer be an issue, the business process will be enhanced and users will become s more efficient. As such there are tangible and intangible benefits to be gained from using <strong>Docusoft</strong> .</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded={expandedItem === 6}
                  aria-controls="collapseSix"
                  onClick={() => toggleItem(6)}
                >
                  <i
                    className={`fas ${
                      expandedItem === 6 ? "fa-minus" : "fa-plus"
                    } me-2 cOlOr`}
                  ></i>
                  Why Docusoft?
                </button>
              </h2>
              <div
                id="collapseSix"
                className={`accordion-collapse collapse ${
                  expandedItem === 6 ? "show" : ""
                }`}
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className={style["FFAPTM"]}><p>
                    We have a proven record of reliability, support and of delivering a perfect information filing solution to business. which saves time and money.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <div className={style["BannerImage"]}>
            <img
              src="src/assets/Questitons&AnsBanner.png"
              alt="Questation&Answers"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default QuestionsAnswers;
