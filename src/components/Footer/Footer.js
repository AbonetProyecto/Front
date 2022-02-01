
import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
// import Logo from './../../../Assets/Img/leopetLogo.png';
import './Footer.css';

export const Footer = () => {
    return (
        <Container className="contenedorFooter ">
            <Row>

                <Col className="columnas">
                    <h5>Contactanos</h5>
                    <Button variant="link" className="links">Nuestro Correo: consultas@abonet.com</Button>
                    <Button variant="link" className="links">Nuestro Telefono: +593 099 123 45 68</Button>
                </Col>
                <Col className="columnas">
                    <h5>Siguenos</h5>
                    <Button variant="link" className="links">Facebook</Button>
                    <Button variant="link" className="links">Instagram</Button>
                    <Button variant="link" className="links">Twitter</Button>
                </Col>
                <Col className="columnas">
                    <h5>Sobre Nosotros</h5>
                    <Button variant="link" className="links">Mision</Button>
                    <Button variant="link" className="links">Vision</Button>
                    <Button variant="link" className="links">Politica de privacidad</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6>Abonet @2022</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;

