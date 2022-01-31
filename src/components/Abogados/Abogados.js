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
        console.log(abogados)
    }, [abogados, liRetorno]);

    useEffect(() => {
        fetchAbogados();
    }, []);

   async function fetchAbogados() {
       await fetch(endpointAbogado).then(res=>res.json())
           .then(async abogados => {
               for (let abog of abogados) {
                   let usuario = await fetchUsuario(abog.usuario_id)
                   let telefono = await fetchTelefonos(usuario.telefono_id);
                   let direccion = await fetchDireccion(usuario.direccion_id);
                   liRetorno.push({
                       "nombre":usuario.nombre,
                       "casos":abog.casos,
                       "descripcion":abog.descripcion,
                       "calificacion":abog.calificacion,
                       "movil":telefono.movil,
                       "direccion":`${direccion.ciudad}, Sector:${direccion.sector}, ${direccion.callePrincipal}`
                   })
               }
               setAbogados(liRetorno)
           })

   }
    function  fetchUsuario(id){
        return fetch(`${endpointUsuario}/${id}`).then(res=>res.json());

    }

    function fetchTelefonos(id){
        return fetch(`${endpointTelefono}/${id}`).then(res=>res.json());

    }

    function  fetchDireccion(id){
        return fetch(`${endpointDireccion}/${id}`).then(res=>res.json());
    }
    if(abogados.length === 0){
        return <>Cargando....</>
    }


    return (
        <Container id="contenedor">
            {abogados.map((abog, i) => {
                    return (
                        <Row  key={i} className="fila">
                            <Card>
                                <Card.Img variant="top" className="foto"
                                          src="https://cdn-icons-png.flaticon.com/512/1615/1615060.png"/>
                                <Card.Body>
                                    <Card.Title>{abog.nombre}</Card.Title>
                                    <Card.Text>
                                        {abog.descripcion}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Numero: {abog.movil}</ListGroupItem>
                                    <ListGroupItem>Direccion: {abog.direccion}</ListGroupItem>
                                    <ListGroupItem>Casos: {abog.casos}</ListGroupItem>
                                </ListGroup>
                            </Card>

                        </Row>)

                }
            )}
        </Container>
    );

};
export default Abogados;
