// src/pages/Informe.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import '../assets/styles.css';

const Informe = () => {
  // Estado para los datos de informe
  const [informeData, setInformeData] = useState([
    {
      id: 1,
      fecha: '2025-01-20',
      actividad: 'Sincronización de Stock',
      estado: 'Exitoso',
      comentarios: 'Actualización realizada correctamente.',
    },
    {
      id: 2,
      fecha: '2025-01-19',
      actividad: 'Revisión de Reservas',
      estado: 'Parcial',
      comentarios: 'Algunas reservas no fueron confirmadas.',
    },
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
      const rowData = Array.from(cells).map((cell) => cell.innerText).join(',');
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
      <Navbar />
      <SearchBar />
      <div className="container-fluid">
        {/* Sección de Informe */}
        <div className="contenedor container-fluid table-responsive mt-1" id="informe">
          <h2>Informe de Actividades</h2>
          <p>A continuación se muestran los informes detallados de las actividades realizadas.</p>
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Actividad</th>
                <th>Estado</th>
                <th>Comentarios</th>
              </tr>
            </thead>
            <tbody>
              {informeData.map((item) => (
                <tr key={item.id}>
                  <td>{item.fecha}</td>
                  <td>{item.actividad}</td>
                  <td>{item.estado}</td>
                  <td>{item.comentarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button id="bi" onClick={() => downloadReport('informe')}>
            Descargar Informe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informe;