import React, {useState} from "react";
import {Col, Form, Row, Button} from "react-bootstrap";


export const Formulario = () => {
    const [data, setData] = useState({
        "nombre": "",
        "contrasena": "",
        "direccion": "",
        "calleSecundaria": "",
        "ciudad": "",
        "sector": "",
        "movil": "",
        "convencional": "",
        "descripcion": ""

    })
    // useEffect(()=>{
    //     console.log(data)
    // },[data])

    const handleSubmit = async (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        const configTelefono = {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                convencional:data.convencional,
                movil:data.movil
            })
        }
        const response = await fetch("http://localhost:3001/api/v1/telefonos",configTelefono);
        let telef = await response.json()
        telef = telef.data
        const configDir = {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                callePrincipal:data.direccion,
                calleSecundaria:data.calleSecundaria,
                ciudad:data.ciudad,
                sector:data.sector
            })
        }
        const response2 = await fetch("http://localhost:3001/api/v1/direccions",configDir);
        let dir = await response2.json()
        dir = dir.data;
        const configUser = {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                nombre:data.nombre,
                contrasena:data.contrasena,
                telefono_id:telef.id,
                direccion_id:dir.id
            })
        }
        const response3 = await  fetch("http://localhost:3001/api/v1/usuarios",configUser)
        let user = await response3.json()
        user = user.data

        const configAbog = {
            method: 'Post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                casos:0,
                descripcion:data.descripcion,
                calificacion:0,
                usuario_id:user.id
            })
        }
        const response4 = await fetch("http://localhost:3001/api/v1/abogados",configAbog);
        let abogado = await response4.json();
        console.log(abogado);




    };


    const handleChangeNombre = (event) => {
        setData({...data, nombre: event.target.value});
    };
    const handleChangeContrasena = (event) => {
        setData({...data, contrasena: event.target.value});
    };
    const handleChangeDireccion = (event) => {
        setData({...data, direccion: event.target.value});

    };
    const handleChangecalleSecundaria = (event) => {
        setData({...data, calleSecundaria: event.target.value});
    };
    const handleChangeCiudad = (event) => {
        setData({...data, ciudad: event.target.value});
    };
    const handleChangeSector = (event) => {
        setData({...data, sector: event.target.value});
    };
    const handleChangeMovil = (event) => {
        setData({...data, movil: event.target.value});
    };
    const handleChangeConvencional = (event) => {
        setData({...data, convencional: event.target.value});
    };

    const handleChangeDescripcion = (event) => {
        setData({...data, descripcion: event.target.value});
    };

    return (
        <>
            <h2 id="titlo">Deseas Unirte a Nostros?</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" onChange={handleChangeNombre}>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Ingrese su Nombre Completo aqui" defaultValue={data.nombre}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" defaultValue={data.contrasena}
                                      onChange={handleChangeContrasena}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control placeholder="CallePrincipal" defaultValue={data.direccion}
                                  onChange={handleChangeDireccion}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Calle Secundaria</Form.Label>
                    <Form.Control placeholder="Apartmento o piso" defaultValue={data.calleSecundaria}
                                  onChange={handleChangecalleSecundaria}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control defaultValue={data.ciudad} onChange={handleChangeCiudad}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Sector</Form.Label>
                        <Form.Select defaultValue={data.sector} onChange={handleChangeSector}>
                            <option value="Urdesa">Urdesa</option>
                            <option value="Centro">Centro</option>
                            <option value="Norte">Norte</option>
                            <option value="Sur">Sur</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Movil</Form.Label>
                        <Form.Control placeholder="099 896 7854" defaultValue={data.movil}
                                      onChange={handleChangeMovil}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Convencional</Form.Label>
                        <Form.Control placeholder="285698731" defaultValue={data.convencional}
                                      onChange={handleChangeConvencional}/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ingrese su descripcion aqui</Form.Label>
                        <Form.Control as="textarea" rows={3} defaultValue={data.descripcion}
                                      onChange={handleChangeDescripcion}/>
                    </Form.Group>
                </Row>


                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </>
    )

}
export default Formulario;