import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App;
