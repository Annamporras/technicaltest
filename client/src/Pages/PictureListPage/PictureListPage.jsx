import { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PictureList from '../../Components/PictureList/PictureList'
import picturesService from '../../Services/pictures.service'

const PictureListPage = () => {

    const [pictures, setPictures] = useState([])

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
        <Container>
            <h1>Listado de imágenes</h1>
            <hr />
            <PictureList pictures={pictures} />
            <Link to='/'>
                <Button style={{ marginBottom: 50 }} variant='dark'>Volver a Inicio</Button>
            </Link>
        </Container>
    )
}

export default PictureListPage