
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const EdicionUsuario = ({ articulos, handlerUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nombreUsuario, setNombre] = useState('');
    const [apellidoPaterno, setAppP] = useState('');
    const [apellidoMaterno, setAppM] = useState('');
    const [direccion, setDir] = useState('');
    const [telefono, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

    // Cargar datos del usuario al montar
    useEffect(() => {
        const usuario = articulos.find(art => art.id === parseInt(id));
        if (usuario) {
            setNombre(usuario.nombreUsuario || '');
            setAppP(usuario.apellidoPaterno || '');
            setAppM(usuario.apellidoMaterno || '');
            setDir(usuario.direccion || '');
            setTel(usuario.telefono || '');
            setEmail(usuario.email || '');
        }
    }, [id, articulos]);

    const onUpdateUser = async (event) => {
        event.preventDefault();

        const result = await handlerUpdate({
            id: Number(id),
            nombreUsuario,
            apellidoPaterno,
            apellidoMaterno,
            direccion,
            telefono,
            email
        });

        if (result?.success) {
            setMostrarFormulario(false);
        }
    };

    const handleVolver = () => {
        navigate('/listado');
    };

    return (
        <>
            <Container className='mt-3'>
                <header>
                    <h1 className='text-center'>Editar Usuario</h1>
                </header>

                {!mostrarFormulario ? (
                    <Row className="justify-content-md-center mt-5">
                        <Col md={8} className="text-center">
                            <div className="alert alert-success" role="alert">
                                <h4>¡Usuario actualizado exitosamente!</h4>
                            </div>
                            <Button variant='primary' onClick={handleVolver}>
                                Volver al Listado
                            </Button>
                        </Col>
                    </Row>
                ) : (
                    <Form onSubmit={onUpdateUser}>
                        <Form.Group>
                            <Row className="justify-content-md-center mt-3">

                                <Col md={8}>
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="nombreUsuario"
                                        value={nombreUsuario}
                                        onChange={(e)=> setNombre(e.target.value)}
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
                                    <Form.Label className='mt-2'>Email</Form.Label>
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
                                    Guardar Cambios
                                </Button>
                                <Button className='mt-3 ms-2' variant='secondary' onClick={handleVolver}>
                                    Cancelar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Container>
        </>
    );
}