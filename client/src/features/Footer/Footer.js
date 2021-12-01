import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from "react-bootstrap";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
import AdminLogin from "./AdminLogin";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className={styles.mt_5} bg="dark">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col>
            <h3>Contact Us</h3>
            <ContactForm/>
          </Col>
          <Col className="p-0" md={6}>
            <Row>
              <AdminLogin />
            </Row>
            <h5>Association of Computer Engineers</h5>
            {/* TODO 
            Add Social Media Icons */}
            <Nav className="ml-auto" bg="dark">
              <div className="icons">
                <SocialIcon url="https://www.instagram.com/ace_uf/"></SocialIcon>
                <SocialIcon url="https://twitter.com/ace_uf/"></SocialIcon>
                <SocialIcon url="https://www.facebook.com/GatorACE"></SocialIcon>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
