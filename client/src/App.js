import './App.css';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import UserMessage from './Components/UserMessage/UserMessage';
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <>
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </>
  )
}

export default App;
