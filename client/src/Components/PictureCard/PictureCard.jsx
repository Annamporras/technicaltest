import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PictureCard.css'


const PictureCard = ({ title, image, _id }) => {


    return (
        <Card className='pictureCard'>
            <Link to={`/detalles/${_id}`}>
                <Card.Img variant="top" src={image} />
            </Link>
            <Card.Body>
                <Link className='titlePicture' to={`/detalles/${_id}`}>
                    <Card.Title >{title}</Card.Title>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default PictureCard

