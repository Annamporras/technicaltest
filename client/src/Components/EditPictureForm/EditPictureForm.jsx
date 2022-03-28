import { useState, useEffect, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import picturesService from "../../Services/pictures.service"
import uploadService from "../../Services/upload.service"
import { Container, Form, Button } from 'react-bootstrap'
import { MessageContext } from "../../context/userMessage.context"

const EditPictureForm = () => {

    const [pictureDetails, setPictureDetails] = useState({})
    const { id } = useParams()
    const { title, image, description } = pictureDetails

    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

    useEffect(() => {
        picturesService
            .getOnePicture(id)
            .then(({ data }) => setPictureDetails(data))
            .catch(err => console.log(err))
    }, [])

    // image config
    const [loadingImage, setLoadingImage] = useState(false)

    const uploadPicture = e => {

        setLoadingImage(true)

        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setPictureDetails({ ...pictureDetails, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const navigate = useNavigate()

    //handleling Form
    const handleInputChange = e => {

        let { name, value } = e.currentTarget

        setPictureDetails({
            ...pictureDetails,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        picturesService
            .editPicture(id, pictureDetails)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Perfecto!', desc: 'Has modificado la imagen' })
                navigate(`/detalles/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h3>Editar foto</h3>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Introduce un título" value={title} onChange={handleInputChange} name='title' />
                </Form.Group>

                <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Seleccionar imagen</Form.Label>
                    <Form.Control type="file" onChange={uploadPicture} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} aria-label="With textarea" value={description} onChange={handleInputChange} name='description' />
                </Form.Group>
                < div className="d-grid gap-2" >
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere por favor...' : 'Guardar cambios'}</Button>
                </div>
            </Form>
        </Container>
    )
}

export default EditPictureForm