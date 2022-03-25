import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    return (
        <Navbar className='navigation' bg="dark" variant='dark' expand="lg">
            <Container className='text'>
                <NavLink to='/'>
                    <Navbar.Brand as='span'>Núvol App!</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/'>
                            <Nav.Link as='span'>Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to='/galeria'>
                            <Nav.Link as='span'>Listado de imágenes</Nav.Link>
                        </NavLink>

                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Viajes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Animales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Coches</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation