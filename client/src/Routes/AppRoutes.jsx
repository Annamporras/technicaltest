import { Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'

const AppRoutes = () => {


    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/detalles/:product_id" element={<h3>Detalles</h3>} />
            <Route path='*' element={<h1>Error 404 - Página no encontrada</h1>} />
        </Routes>
    )
}

export default AppRoutes