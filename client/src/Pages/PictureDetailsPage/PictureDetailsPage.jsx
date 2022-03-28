import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import picturesService from '../../Services/pictures.service'
import { Container, Row, Col, Button } from 'react-bootstrap'


const PictureDetailsPage = () => {

    const [pictureDetails, setPictureDetails] = useState({})
    const { id } = useParams()
    const { title, image, description } = pictureDetails

    useEffect(() => {
        picturesService
            .getOnePicture(id)
            .then(({ data }) => setPictureDetails(data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const deleteItems = () => {
        picturesService
            .deletePicture(id)
            .then(() => navigate('/galeria'))
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <h1>Detalles de {title}</h1>
            <hr />
            <Row style={{ textAlign: 'justify' }}>
                <Col md={{ span: 4, offset: 1 }}>
                    <h3>Descripcion</h3>
                    <p>{description}</p>
                </Col>
                <Col md={6}>
                    <img style={{ width: '100%' }} src={image} alt={title} />
                    <br />    <br />
                    <Link to={`/detalles/editar/${id}`}>
                        <Button style={{ width: '25%', marginRight: 1 }} className='btn btn-outline-dark' variant="ligth">Editar</Button>
                    </Link>

                    <Button style={{ width: '25%' }} className='btn btn-outline-danger' variant="light" onClick={() => deleteItems()}>Eliminar</Button>
                </Col>
                <Link to="/galeria">
                    <Button style={{ marginBottom: 50 }} variant="dark">Volver</Button>
                </Link>
            </Row>

        </Container >
    )
}

export default PictureDetailsPage