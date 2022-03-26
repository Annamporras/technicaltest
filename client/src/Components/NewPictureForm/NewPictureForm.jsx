import { useState } from 'react'
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap'

const NewPictureForm = () => {

    const [pictureData, setPictureData] = useState({
        title: '',
        imageUrl: '',
        description: '',
    })

    const { title, imageUrl, description } = pictureData




    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Introduce un título" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control type="file" placeholder="Selecciona una imagen" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <FormControl as="textarea" rows={3} aria-label="With textarea" />
                        </Form.Group>
                        < div className="d-grid gap-2" >
                            <Button variant="dark" type="submit">
                                Subir imagen
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default NewPictureForm