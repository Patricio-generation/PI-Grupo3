import '../assets/styles.css';
import Footer from '../components/Footer';
import FormularioSincronizado from '../components/FormularioSincronizado'; // Importa el formulario
import Dashboard from '../components/Dashboard';
import ReservationsTable from '../components/ReservationsTable';
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';

const Inicio = () => {
  const { reservations } = useContext(ApiContext);

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
        {/* Sección de Sincronización de Stock */}
        <div
          className='contenedor container-fluid table-responsive mt-1'
          id='sincronizacion'
        >
          <h2>Sincronización de Stock</h2>
          <p>Registro de las sincronizaciones realizadas con las OTAs.</p>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>OTA</th>
                <th>Estado</th>
                <th>Disponibilidad Actualizada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-01-20</td>
                <td>Booking</td>
                <td>Exitoso</td>
                <td>20 Habitaciones</td>
              </tr>
              <tr>
                <td>2025-01-19</td>
                <td>Airbnb</td>
                <td>Error</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
          <button id='bi' onClick={() => downloadReport('sincronizacion')}>
            Descargar Informe
          </button>
        </div>

        {/* Tabla de Reservas */}
        <ReservationsTable
          reservations={reservations}
          onDownload={() => downloadReport('reservas')}
        />

        {/* Sección de Pagos */}
        <div className='contenedor container-fluid table-responsive mt-1' id='pagos'>
          <h2>Pagos</h2>
          <p>Información detallada sobre las transacciones de pagos.</p>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Monto</th>
                <th>Método</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-01-20</td>
                <td>Juan Pérez</td>
                <td>$150.00</td>
                <td>Tarjeta</td>
              </tr>
              <tr>
                <td>2025-01-19</td>
                <td>Ana López</td>
                <td>$200.00</td>
                <td>PayPal</td>
              </tr>
            </tbody>
          </table>
          <button id='bi' onClick={() => downloadReport('pagos')}>
            Descargar Informe
          </button>
        </div>

        {/* Nueva sección para el formulario de sincronización */}
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
