// src/pages/Stock.jsx
import { useContext } from 'react';
import '../assets/styles.css';
import Footer from '../components/Footer';
import { ApiContext } from '../context/ApiContext';

const Stock = () => {
  // Estado para los datos de stock
  const { cabins: cabinsData } = useContext(ApiContext);

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
                <th>Número</th>
                <th>Estado</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cabinsData.map((cabin) => (
                <tr key={cabin._id}>
                  <td>{cabin.number}</td>
                  <td>{cabin.status}</td>
                  <td>{parseCabinPrice(cabin)}</td>
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

const parseCabinPrice = (cabin) => {
  const priceNumber = parseFloat(cabin.price);
  const currency = cabin.currency || 'CLP';
  return `$${priceNumber} ${currency}`;
};

export default Stock;
