import { useContext } from 'react';
import '../assets/styles.css';
import Footer from '../components/Footer';
import { ApiContext } from '../context/ApiContext';
import StockTable from '../components/StockTable';

const Stock = () => {
  const { cabins } = useContext(ApiContext);

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

    rows.forEach((row) => {
      const cells = row.querySelectorAll('td');
      const rowData = Array.from(cells)
        .map((cell) => cell.innerText)
        .join(',');
      data += rowData + '\n';
    });

    const blob = new Blob([data], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${sectionId}_informe.csv`;
    link.click();
  };

  return (
    <div>
      <div className='container-fluid'>
        <StockTable cabinsData={cabins} downloadReport={downloadReport} />
      </div>
      <Footer />
    </div>
  );
};

export default Stock;
