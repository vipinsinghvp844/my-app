import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./DocumentManagement.module.css";
import { Link } from "react-router-dom";

function DocumentManagement() {
  return (
    <>
      <Container className={style["DocumentM"]}>
        <Row className={style["Rowheight"]}>
          <h1>Document Management</h1>
        </Row>
        <Row>
          <Col sm={6}>
            <h2>Storing your Files, Managing your Business Documents</h2>
            <p>
              <strong>Docusoft CloudFiler </strong>includes the best features
              for managing business documents in the cloud. Its powerful set of
              tools are designed to make it easier to securely manage your
              client data and business documents. From any device, users can
              scan, upload and file documents directly from local storage or the
              application they are working in. Filing structures can be created
              and user access permissions set. Users can search for documents,
              view documents on-line and download them
            </p>
          </Col>
          <Col sm={6}>
            <img
              src="src\assets\cloud-DocuSoftManagement banner.png"
              alt=""
              width={540}
            />
          </Col>
        </Row>
      </Container>
      <Container className={style["DocumentM2"]}>
        <Row>
          <Col sm={6}>
            <div className={style["particulerdiv"]}>
              <img src="src\assets\DS-DMS-BlueRed-icon1-150.png" alt="" />
              <h3>
                Docusoft document <br />
                management software
              </h3>
            </div>
          </Col>
          <Col sm={6} className="d-flex">
            <div className={style["particulerdiv2"]}>
              <h3>Any Time, Any Place, Any Device</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="align-items-center">
              <p>
                <i class="bi bi-check"></i> Powerful search options
              </p>
              <p>
                <i class="bi bi-check"></i> OCR search built-in
              </p>
              <p>
                <i class="bi bi-check"></i> Built-in Email management
              </p>
              <p>
                <i class="bi bi-check"></i> Email archive
              </p>
              <p>
                <i class="bi bi-check"></i> Workflow
              </p>
              <p>
                <i class="bi bi-check"></i> Microsoft Office, Outlook Add-ins
              </p>
              <p>
                <i class="bi bi-check"></i> Scanning tools
              </p>
              <p>
                <i class="bi bi-check"></i> Versioning
              </p>
              <p>
                <i class="bi bi-check"></i> PDF Form filler
              </p>
              <p>
                <i class="bi bi-check"></i> Preview documents
              </p>
              <p>
                <i class="bi bi-check"></i> Share documents
              </p>
              <p>
                <i class="bi bi-check"></i> Create your own filing structure
              </p>
              <p>
                <i class="bi bi-check"></i> Mobile app
              </p>
              <p>
                <i class="bi bi-check"></i> Document Link Sharing
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className={style["particulerdiv3"]}>
              <h3>All your documents</h3>
              <h3>in one place, easy to find,</h3>
              <h3>easy to manage,</h3>
              <h3>shared easily and securely.</h3>
            </div>
            <div className={style["Documentbutton"]}>
              <Link to="/Contact">
                <Button variant="primary" className="FreeDemobtn">
                  Call to Arrange a Demo
                </Button>
              </Link>
            </div>
            <div className={style["reviewdiv"]}>
              <a href="https://www.capterra.com/reviews/264964/Docusoft-CloudFiler?utm_source=vendor&utm_medium=badge&utm_campaign=capterra_reviews_badge" target="blank"><img
                src="src\assets\Capetera review.svg"
                alt="Capterra"
                className={style["image1st"]}
              /></a>
              <a href="https://www.softwareadvice.com/document-version-control/docusoft-cloudfiler-profile/reviews/" target="blank"><img
                src="src\assets\Software review.webp"
                alt="Software advice"
                className={style["image2nd"]}
              /></a>
              <a href="https://www.getapp.com/it-management-software/a/docusoft-cloudfiler/reviews/" target="blank"><img
                src="src\assets\getapp review.png"
                alt="GetApp"
                className={style["image3rd"]}
              /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DocumentManagement;
