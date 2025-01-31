import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Inicio from './pages/Inicio';
import Reservas from './pages/Reservas';
import Informe from './pages/Informe';
import Pagos from './pages/Pagos';
import Stock from './pages/Stock';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Inicio />} />
        <Route path='/reservas' element={<Reservas />} />
        <Route path='/informe' element={<Informe />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/pagos' element={<Pagos />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
