import React, { useState } from 'react';

function FormularioSincronizado() {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  // Función para manejar cambios en los campos
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', formData);
    alert(`Formulario enviado:\nNombre: ${formData.nombre}\nEmail: ${formData.email}\nTeléfono: ${formData.telefono}`);
  };

  return (
    <div style={styles.container}>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="nombre" style={styles.label}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="telefono" style={styles.label}>Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

// Estilos para el formulario
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default FormularioSincronizado;