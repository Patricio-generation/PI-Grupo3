// src/pages/Reservas.jsxcd B
import { useContext } from 'react'; //acceder datos del contexto
import '../assets/styles.css';
import Footer from '../components/Footer';
import ReservationsTable from '../components/ReservationsTable';
import HistoricalreservationsTable from '../components/HistoricalReservationsTable';
import { ApiContext } from '../context/ApiContext';

const Reservas = () => {
  const { reservations, historicalReservations } = useContext(ApiContext);

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
      // Crear y descargar el archivo CSV
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
        <ReservationsTable //renderizar las reservas obtenidas hacia el componente ReservationsTable
          reservations={reservations}
          onDownload={() => downloadReport('reservas')}
        />
      </div>

      <div className='container-fluid'>
        <HistoricalreservationsTable
          historicalReservations={historicalReservations}
          onDownload={() => downloadReport('reservas-historicas')}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Reservas;
