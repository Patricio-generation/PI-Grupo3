import '../assets/styles.css';
import Footer from '../components/Footer';
import FormularioSincronizado from '../components/FormularioSincronizado'; // Importa el formulario
import Dashboard from '../components/Dashboard';
import ReservationsTable from '../components/ReservationsTable';
import StockTable from '../components/StockTable';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import PaymentTable from '../components/PaymentTable';

const Inicio = () => {
  const { reservations, cabins, payments } = useContext(ApiContext);

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
        <Dashboard />
        <StockTable cabinsData={cabins} downloadReport={downloadReport} />
        <ReservationsTable
          reservations={reservations}
          onDownload={() => downloadReport('reservas')}
        />
        <PaymentTable payments={payments} onDownload={() => downloadReport('pagos')} />

        <div className='contenedor container-fluid mt-1'>
          <h2>Formulario de Contacto</h2>
          <FormularioSincronizado />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Inicio;
