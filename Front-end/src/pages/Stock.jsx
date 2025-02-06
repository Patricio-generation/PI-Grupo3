// src/pages/Stock.jsx
import { useState } from 'react';
import '../assets/styles.css';
import Footer from '../components/Footer';

const Stock = () => {
  // Estado para los datos de stock
  const [stockData] = useState([
    { id: 1, product: 'Toallas', quantity: 50, lastUpdated: '2025-01-20' },
    { id: 2, product: 'Jabones', quantity: 200, lastUpdated: '2025-01-19' },
  ]);

  // Función para descargar el informe en formato CSV
  const downloadReport = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      console.error(`No se encontró la sección con ID: ${sectionId}`);
      return;
    }

    let data = '';
    const rows = section.querySelectorAll('table tbody tr');

    if (rows.length === 0) {
      alert('No hay datos disponibles para descargar.');
      return;
    }

    // Generar el contenido del CSV
    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const rowData = Array.from(cells)
        .map((cell) => cell.innerText)
        .join(',');
      data += rowData + '\n';
    });

    // Crear y descargar el archivo CSV
    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sectionId}_informe.csv`;
    link.click();
  };

  return (
    <div>
      <div className='container-fluid'>
        {/* Sección de Stock */}
        <div className='contenedor container-fluid table-responsive mt-1' id='stock'>
          <h2>Gestión de Stock</h2>
          <p>
            A continuación se detallan los productos y servicios disponibles en el stock
            del hotel.
          </p>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad Disponible</th>
                <th>Última Actualización</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item) => (
                <tr key={item.id}>
                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <td>{item.lastUpdated}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id='bi' onClick={() => downloadReport('stock')}>
            Descargar Informe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Stock;
