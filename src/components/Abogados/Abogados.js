import React, {useEffect, useState} from 'react';
import '../../App.css';
import "./abogados.css"
import {Card, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";

const Abogados = () => {
    const [abogados, setAbogados] = useState([]);
    const endpointAbogado = "http://localhost:3001/api/v1/abogados"
    const endpointTelefono = "http://localhost:3001/api/v1/telefonos"
    const endpointDireccion = "http://localhost:3001/api/v1/direccions"
    const endpointUsuario = "http://localhost:3001/api/v1/usuarios"
    let liRetorno = [];

    useEffect(() => {
        fetchAbogados();
    }, []);

    useEffect(() => {
        console.log(abogados)
    }, [abogados]);

    const fetchAbogados = () => {
        fetch(endpointAbogado)
            .then(res => res.json())
            .then(data => {
                let i = 0;

                for (let aboga of data) {
                    let casos = data[i].casos
                    let descripcion = data[i].descripcion
                    let calif = data[i].calificacion
                    fetch(endpointUsuario + `/${aboga.usuario_id}`)
                        .then(res => res.json())
                        .then(usuario => {
                            let nombre = usuario.nombre;
                            fetch(endpointTelefono + `/${usuario.telefono_id}`)
                                .then(res => res.json())
                                .then(telefono => {
                                    let movil = telefono.movil
                                    fetch(endpointDireccion + `/${usuario.direccion_id}`)
                                        .then(res => res.json())
                                        .then(direccion => {
                                            let dirFinal = direccion.ciudad + "," + direccion.sector + "," + direccion.callePrincipal + "," + direccion.calleSecundaria
                                            liRetorno.push({
                                                "casos": casos,
                                                "descripcion": descripcion,
                                                "calificacion": calif,
                                                "nombre": nombre,
                                                "movil": movil,
                                                "direccion": dirFinal
                                            })
                                        })
                                })
                        })
                    i += 1;
                }
                setAbogados(liRetorno);
            })
    }

    return (
        <Container id="contenedor">
            <Row className="fila">
                <Card>
                    <Card.Img variant="top" className="foto"
                              src="https://cdn-icons-png.flaticon.com/512/1615/1615060.png"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cras justo odio</ListGroupItem>
                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    </ListGroup>
                </Card>

            </Row>
            {abogados.map((abog,i)=> (
                <div>{abog.nombre}</div>
            ))}
        </Container>
    );

};
export default Abogados;
