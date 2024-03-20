import './App.scss';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import Header  from './components/Header';
import Footer from './components/Footer';
import Uploadpage from './components/Uploadpage';
import ProductPage from './components/ProductPage';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Header />
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/uploadpage' element={<Uploadpage />} />
            <Route path='/productpage/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
