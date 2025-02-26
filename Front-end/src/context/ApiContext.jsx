import { createContext, useState, useEffect } from 'react';
import API from '../services/Api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [cabins, setCabins] = useState([]);
  const [clients, setClients] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [payments, setPayments] = useState([]);
  const [tinajaBookings, setTinajaBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [historicalReservations, setHistoricalReservations] = useState([]);
  const [historicalPayments, setHistoricalPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    fetchHistoricalData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [cabinRes, clientRes, reservationRes, paymentRes, tinajaBookingRes, userRes] =
        await Promise.all([
          API.get('/cabins'),
          API.get('/clients'),
          API.get('/reservations'),
          API.get('/payments'),
          API.get('/tinajas'),
          API.get('/users'),
        ]);

      setCabins(cabinRes.data);
      setClients(clientRes.data);
      setReservations(reservationRes.data);
      setPayments(paymentRes.data);
      setTinajaBookings(tinajaBookingRes.data);
      setUsers(userRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchHistoricalData = async () => {
    setLoading(true);
    try {
      const [historicalResRes, historicalPayRes] = await Promise.all([
        API.get('/historical/reservations'),
        API.get('/historical/payments'),
      ]);

      setHistoricalReservations(historicalResRes.data);
      setHistoricalPayments(historicalPayRes.data);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        cabins,
        clients,
        reservations,
        payments,
        tinajaBookings,
        users,
        historicalReservations,
        historicalPayments,
        loading,
        fetchData,
        fetchHistoricalData,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
