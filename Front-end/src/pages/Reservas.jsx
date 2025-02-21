// src/pages/Reservas.jsx
import { useContext } from 'react';
import '../assets/styles.css';
import Footer from '../components/Footer';
import { ApiContext } from '../context/ApiContext';

const Reservas = () => {
  const { reservations: reservationsData } = useContext(ApiContext);

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
        {/* Sección de Reservas */}
        <div className='contenedor container-fluid table-responsive mt-1' id='reservas'>
          <h2>Resumen de Reservas</h2>
          <p>A continuación se detallan las reservas recientes realizadas en el hotel.</p>
          <table>
            <thead>
              <tr>
                <th>Fecha Check In</th>
                <th>Fecha Check Out</th>
                <th>Cliente</th>
                <th>Habitación</th>
                <th>Origen</th>
              </tr>
            </thead>
            <tbody>
              {reservationsData.map((reservation) => (
                <tr key={reservation._id}>
                  <td>{parseFecha(reservation.checkinDate)}</td>
                  <td>{parseFecha(reservation.checkoutDate)}</td>
                  <td>{reservation.client.name}</td>
                  <td>{reservation.cabin.number}</td>
                  <td>{reservation.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id='bi' onClick={() => downloadReport('reservas')}>
            Descargar Informe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservas;


function parseFecha(fechaStr) {
  const fecha = new Date(fechaStr);

  return fecha.toISOString().split("T")[0] // "YYYY-MM-DD"
}
