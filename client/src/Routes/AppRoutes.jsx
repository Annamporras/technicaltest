import { Routes, Route } from 'react-router-dom'
import EditPictureForm from '../Components/EditPictureForm/EditPictureForm'
import HomePage from '../Pages/HomePage/HomePage'
import PictureDetailsPage from '../Pages/PictureDetailsPage/PictureDetailsPage'
import PictureListPage from '../Pages/PictureListPage/PictureListPage'


const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/galeria' element={<PictureListPage />} />
            <Route path="/detalles/:id" element={<PictureDetailsPage />} />
            <Route path="/detalles/editar/:id" element={<EditPictureForm />} />
            <Route path='*' element={<h1>Error 404 - Página no encontrada</h1>} />
        </Routes>
    )
}

export default AppRoutes