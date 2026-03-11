import { Container, Row ,Col, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import '../css/App.css'
import { useNavigate } from 'react-router-dom';


export const LoginView = () => {

    const navegar = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navegar("/listado");
    };

    return(
        <>
            <div className="login-container pt-5">
                <Container>
                    <header>
                        <h1 className='text-center'>Digital One Source System</h1>
                    </header>
                    <Row className="position-absolute top-50 start-50 translate-middle w-50 p3" >
                        <Col>
                            <Form onSubmit={handleLogin}>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="Username" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Password" />
                                    </Col>
                                </Row>
                                <Row className='mt-5 mb-5'>
                                    <Button variant="primary" type="submit">Ingresar</Button>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}