import React from 'react';

function Card({ title, value, icon }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '8px',
  },
};

export default Card;