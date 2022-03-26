import { useState, useEffect } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NewPictureForm from '../../Components/NewPictureForm/NewPictureForm'
import PictureList from '../../Components/PictureList/PictureList'
import picturesService from '../../Services/pictures.service'

const PictureListPage = () => {

    const [pictures, setPictures] = useState([])
    const [showModal, setShowModal] = useState(false)

    const handleModalOpen = () => setShowModal(true)
    const handleModalClose = () => setShowModal(false)


    useEffect(() => {
        loadPictures()
    }, [])

    const loadPictures = () => {
        picturesService
            .getAllPictures()
            .then(({ data }) => setPictures(data))
            .catch(err => console.log(err))
    }



    return (
        <>
            <Container>
                <h1>Listado de imágenes <span onClick={handleModalOpen}>Añadir Foto</span></h1>
                <hr />
                <PictureList pictures={pictures} />
                <Link to='/'>
                    <Button style={{ marginBottom: 50 }} variant='dark'>Volver a Inicio</Button>
                </Link>
            </Container>


            <Modal className='modal' show={showModal} onHide={handleModalClose} size='md'>
                <Modal.Header closeButton>
                    <Modal.Title>Crear nueva imagen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewPictureForm closeModal={handleModalClose} refreshList={loadPictures} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PictureListPage