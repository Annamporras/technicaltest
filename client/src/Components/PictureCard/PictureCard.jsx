import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PictureCard.css'


const PictureCard = ({ title, imageUrl, _id }) => {


    return (
        <Card className='pictureCard'>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default PictureCard

