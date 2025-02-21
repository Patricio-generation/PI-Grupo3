import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ApiProvider } from './context/ApiContext';

import Inicio from './pages/Inicio';
import Reservas from './pages/Reservas';
import Informe from './pages/Informe';
import Pagos from './pages/Pagos';
import Stock from './pages/Stock';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Usuarios from './pages/Usuarios';

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/reservas' element={<Reservas />} />
          <Route path='/informe' element={<Informe />} />
          <Route path='/stock' element={<Stock />} />
          <Route path='/pagos' element={<Pagos />} />
          <Route path='/usuarios' element={<Usuarios />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
