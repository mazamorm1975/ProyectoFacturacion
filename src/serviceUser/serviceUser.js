import { userDetails } from '../detallesUsuario/userDetails';

const API_URL = 'http://localhost:8080/products';

export const userServices = () => {
    return userDetails;
}

// Lista de todos los usuarios encontrados en la base de datos
export const getUserListFromDatabase = async () => {
    try {
        console.log('Extrayendo usuarios desde:', `${API_URL}/items`);

        const response = await fetch(`${API_URL}/items`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        console.log('Status de respuesta:', response.status);

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorData || response.statusText}`);
        }

        const data = await response.json();
        console.log('Listado extraído de Base De Datos exitosamente:', data);
        return data;
    } catch (error) {
        console.error('Error completo al extraer información:', error);
        throw error;
    }
}

export const userRegistrationIntoDB = async (datosUsuario) => {

    try {
        const { id, ...datosNuevoIngreso } = datosUsuario;
        console.log('Enviado información a Base de datos --> ', `${API_URL}/agregarUsuario`);
        console.log('Datos del producto --> ', datosNuevoIngreso);

        const serviceResponse = await fetch(`${API_URL}/agregarUsuario`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datosNuevoIngreso)
        });
        console.log('Status de servicio', serviceResponse.status);

        if (!serviceResponse.ok) {
            const errorResponse = await serviceResponse.text();
            throw new Error(`HTTP ${serviceResponse.status}: ${errorResponse || serviceResponse.status}`);
        }

        const dataJSON = await serviceResponse.json();
        console.log('Datos ingresados correctamente en la BD', dataJSON);

        return dataJSON;

    } catch (error) {
        console.error(`Error al momento de realizar el guardado `, error);
        throw error;
    }

}

//Se implementa servicio para actualización de datos
export const userUpdateIntoDB = async (id, datosUsuario) => {

    try {
        const userId = Number(id);

        if (!Number.isInteger(userId) || userId <= 0) {
            throw new Error('Id de usuario invalido para actualizar');
        }

        console.log('Enviado información a Base de datos --> ', `${API_URL}/actualizarUsuario/${userId}`);
        console.log('Datos del producto --> ', datosUsuario);

        const serviceResponse = await fetch(`${API_URL}/actualizarUsuario/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(datosUsuario)
        });
        console.log('Status de servicio', serviceResponse.status);

        if (!serviceResponse.ok) {
            const errorResponse = await serviceResponse.text();
            throw new Error(`HTTP ${serviceResponse.status}: ${errorResponse || serviceResponse.status}`);
        }

        const dataJSON = await serviceResponse.json();
        console.log('Datos actualizados correctamente en la BD', dataJSON);

        return dataJSON;

    } catch (error) {
        console.error(`Error al momento de realizar el guardado `, error);
        throw error;
    }

}


export const userDeletionRegistry = async (id) => {

    try {
        const userId = Number(id);
        if (!Number.isInteger(userId)  || Number.id <= 0) {
            throw new Error('Numero no existente');
        }
        const serviceDeleteResponse = await fetch(`${API_URL}/borrarUsuario/${userId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }

        });

    } catch (error) {
        console.error(`Error al intentar borrar usuario`, error);
    }
}
