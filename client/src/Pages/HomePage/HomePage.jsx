import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const HomePage = () => {

    return (
        <Container>
            <h1>Bienvenid@ a Núvol App!</h1>
            <Link to='/galeria'>
                <Button variant='dark' size='lg'>Descubre las imágenes</Button>
            </Link>
        </Container>
    )
}

export default HomePage