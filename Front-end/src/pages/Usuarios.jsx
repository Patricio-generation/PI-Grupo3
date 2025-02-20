import React, { useEffect, useState } from "react";
import API from "../services/Api"; // Importamos la configuración de Axios

function Usuarios() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await API.get("/users"); // Endpoint del backend para obtener usuarios
                setUsers(response.data);// Guardar los datos de los usuarios en el estado
            } catch (error) {
                console.error("Error obteniendo usuarios:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Usuarios;
