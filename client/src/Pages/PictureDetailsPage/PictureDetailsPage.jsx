import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PictureDetails from '../../Components/PictureDetails/PictureDetails'
import picturesService from '../../Services/pictures.service'



const PictureDetailsPage = () => {

    const [pictureDetails, setPictureDetails] = useState({})
    const { picture_id } = useParams()

    useEffect(() => {
        picturesService
            .getOnePicture(picture_id)
            .then(({ data }) => setPictureDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>

            <PictureDetails pictureDetails={pictureDetails} />

        </Container>
    )
}

export default PictureDetailsPage