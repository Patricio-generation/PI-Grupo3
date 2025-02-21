import '../assets/styles.css';
import Footer from '../components/Footer';
import { ApiContext } from '../context/ApiContext'; // Importa el contexto
import PaymentTable from '../components/PaymentTable'; // Importa el componente
import { useContext } from 'react';

const Pagos = () => {
  const { payments, loading, error } = useContext(ApiContext);

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

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className='container-fluid'>
        {/* Usar el componente PaymentTable */}
        <PaymentTable payments={payments} onDownload={() => downloadReport('pagos')} />
      </div>
      <Footer />
    </div>
  );
};

export default Pagos;
