import { useNavigate, useParams } from "react-router-dom"
import picturesService from "../../Services/pictures.service"

const PictureDetails = ({ pictureDetails }) => {
    const { picture_id } = useParams()
    const { title, image } = pictureDetails
    const navigate = useNavigate()


    const deleteItems = () => {
        picturesService
            .deletePicture(picture_id)
            .then(() => navigate('/'))
            .catch(err => console.log(err))

    }

    return (
        <Container>
            <br /><br />
            <Card>
                <Container className='detailsProduct'>
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title><h1>{title}</h1> </Card.Title>
                                <br />
                                <Card.Title>Descripción</Card.Title>
                                <hr />
                                <Card.Text>{description}</Card.Text>
                                <br />
                            </Card.Body>
                        </Col>
                        <Col>
                            <Image className='rounded imageProductDetails' style={{ width: '100%' }} variant="top" src={image} />
                            <Link to={`/productos/editar/${_id}`}>
                                <Button style={{ width: '25%' }} className='btn btn-outline-dark buttonProduct' variant="light" >Editar</Button>
                            </Link >

                            <Button style={{ width: '25%' }} className='btn btn-outline-danger buttonProduct' variant="light" onClick={() => deleteProducts()}>Eliminar</Button>
                        </Col>
                    </Row>
                </Container>
            </Card >
        </Container >
    )
}

export default PictureDetails