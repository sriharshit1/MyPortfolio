import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const pdf = "/HarshitSrivastava-JavaDev.pdf"; // PDF path in public folder

  return (
    <div style={{ width: "100%", overflow: "hidden", padding: "40px 0" }}>
      <Particle />
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <object
          data={`${pdf}#toolbar=0&navpanes=0&scrollbar=1`}
          type="application/pdf"
          width="100%"
          height="600px" // 👈 decent fixed height
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>
            Your browser does not support embedded PDFs.{" "}
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
            .
          </p>
        </object>

        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
