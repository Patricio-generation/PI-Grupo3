import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Inicio from './pages/Inicio'; 
import Reservas from './pages/Reservas';
import Informe from './pages/Informe';
import Pagos from './pages/Pagos';
import Stock from './pages/Stock';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Asegúrate de importar el Footer
import SearchBar from './components/SearchBar'; // Asegúrate de importar el SearchBar

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* SearchBar (puedes colocarlo aquí si es global o dentro de cada página si es específico) */}
      <SearchBar />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/informe" element={<Informe />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/pagos" element={<Pagos />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;