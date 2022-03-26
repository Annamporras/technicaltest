import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import PictureListPage from '../Pages/PictureListPage/PictureListPage'

const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/galeria' element={<PictureListPage />} />
            <Route path="/detalles/:product_id" element={<h3>Detalles</h3>} />
            <Route path='*' element={<h1>Error 404 - Página no encontrada</h1>} />
        </Routes>
    )
}

export default AppRoutes