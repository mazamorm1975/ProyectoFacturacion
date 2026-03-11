import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const RegistrationView = ({handler}) => {

    const [nombreUsuario, setNombre] = useState('');
    const [apellidoPaterno, setAppP] = useState('');
    const [apellidoMaterno, setAppM] = useState('');
    const [direccion, setDir] = useState('');
    const [telefono, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

    /*
    const onAddUser = (event) => {
        event.preventDefault();
        handler({ nombreUsuario, apellidoPaterno, apellidoMaterno, direccion, telefono, email });
    };*/


    const onAddUser = async (event) => {
        event.preventDefault();
        nombreUsuario,
            apellidoPaterno,
            apellidoMaterno,
            direccion,
            telefono,
            email


        const result = await handler({ nombreUsuario, apellidoPaterno, apellidoMaterno, direccion, telefono, email });

        if (result?.success) {
            // Ocultar el formulario cuando se guarda exitosamente
            setMostrarFormulario(false);
            // Limpiar los campos
            setNombre('');
            setAppP('');
            setAppM('');
            setDir('');
            setTel('');
            setEmail('');
        }
    };


    //Alternativa de la funcion onAddUser sin user async/await
    /*
        const onAddUser = (event) => {
        event.preventDefault();
        handler({ nombreUsuario, apellidoPaterno, apellidoMaterno, direccion, telefono, email })
            .then(result => {
                if (result?.success) {
                    setMostrarFormulario(false);
                    // ...limpiar campos
                }
            });
    };
    */

    const handleNuevoRegistro = () => {
        setMostrarFormulario(true);
    };


    return (
        <>
            <Container className='mt-3'>
                <header>
                    <h1 className='text-center'>Nuevo Usuario</h1>
                </header>

                {!mostrarFormulario ? (
                    <Row className="justify-content-md-center mt-5">
                        <Col md={8} className="text-center">
                            <div className="alert alert-success" role="alert">
                                <h4>¡Usuario registrado exitosamente!</h4>
                            </div>
                            <Button variant='primary' onClick={handleNuevoRegistro}>
                                Registrar Nuevo Usuario
                            </Button>
                        </Col>
                    </Row>
                ) : (

                    <Form onSubmit={onAddUser}>
                        <Form.Group>
                            <Row className="justify-content-md-center mt-3">

                                <Col md={8}>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="nombreUsuario"
                                        value={nombreUsuario}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </Col>

                                <Col md={8}>
                                    <Form.Label className='mt-2'>Apellido Paterno</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="apellidoPaterno"
                                        value={apellidoPaterno}
                                        onChange={(e) => setAppP(e.target.value)}
                                    />
                                </Col>

                                <Col md={8}>
                                    <Form.Label className='mt-2'>Apellido Materno</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="apellidoMaterno"
                                        value={apellidoMaterno}
                                        onChange={(e) => setAppM(e.target.value)}
                                    />
                                </Col>

                                <Col md={8}>
                                    <Form.Label className='mt-2'>Dirección</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="direccion"
                                        value={direccion}
                                        onChange={(e) => setDir(e.target.value)}
                                    />
                                </Col>

                                <Col md={8}>
                                    <Form.Label className='mt-2'>Telefono</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="telefono"
                                        value={telefono}
                                        onChange={(e) => setTel(e.target.value)}
                                    />
                                </Col>

                                <Col md={8}>
                                    <Form.Label className='mt-2'>email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Col>

                            </Row>

                        </Form.Group>
                        <Row className="justify-content-md-center mt-1">
                            <Col md={8}>
                                <Button className='mt-3' variant='primary' type='submit'>
                                    Registrar Usuario
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Container>
        </>
    );
};