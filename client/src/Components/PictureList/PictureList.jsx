import { Row, Col } from 'react-bootstrap'
import PictureCard from '../PictureCard/PictureCard'



const PictureList = ({ pictures }) => {

    return (
        <Row>
            {pictures.map(picture => {
                return <Col md={3} key={product._id}> <PictureCard {...picture} /> </Col>
            })}
        </Row>
    )
}

export default PictureList