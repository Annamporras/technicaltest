import { useContext, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { MessageContext } from '../../context/userMessage.context'
import picturesService from '../../Services/pictures.service'
import uploadService from '../../Services/upload.service'


const NewPictureForm = ({ closeModal, refreshList }) => {

    const [pictureData, setPictureData] = useState({
        title: '',
        image: '',
        description: ''
    })

    const { title, image, description } = pictureData
    const { setShowMessage, setMessageInfo } = useContext(MessageContext)

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
                setPictureData({ ...pictureData, image: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }


    //handleling Form
    const handleInputChange = e => {

        let { name, value } = e.currentTarget

        setPictureData({
            ...pictureData,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        picturesService
            .createPicture(pictureData)
            .then(({ data }) => {
                setShowMessage(true)
                setMessageInfo({ title: 'Éxito', desc: 'Nueva foto subida' })
                refreshList()
                closeModal()
            })
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
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
                    <Button variant="dark" type="submit" disabled={loadingImage}>{loadingImage ? 'Espere por favor...' : 'Subir imagen'}</Button>
                </div>
            </Form>
        </Container>
    )
}

export default NewPictureForm