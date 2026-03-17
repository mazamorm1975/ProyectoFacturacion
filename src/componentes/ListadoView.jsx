import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Navbar } from './Navbar';
import { toast } from "react-toastify";

export const ListadoView = ({ articulos, onDeleteUser }) => {

  const navigate = useNavigate();

  const handleActualizar = (id) => {
    navigate(`/editar/${id}`);
  };

  const handleEliminar = async (id) => {
    try {
      await onDeleteUser(id);
      return { success: true };
    } catch (err) {
      console.error('Error capturado en hook:', err.message || err);
      toast.error(`Error: ${err.message}`);
      return { success: false };
    }
  };


  return (
    <>
      <Navbar />
      <Table striped hover className="mt-5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Dirección</th>
            <th>Telefono</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => (
            <tr key={art.id}>

              <td>{art.nombreUsuario}</td>
              <td>{art.apellidoPaterno}</td>
              <td>{art.apellidoMaterno}</td>
              <td>{art.direccion}</td>
              <td>{art.telefono}</td>
              <td>{art.email}</td>
              <td>
                <Button
                  variant='info'
                  onClick={() => handleActualizar(art.id)}
                >
                  Actualizar
                </Button>
              </td>
              <td>
                <Button variant='danger' onClick={() => handleEliminar(art.id)}>Eliminar</Button>
              </td>
            </tr>
          ))
          }
        </tbody>
        <tfoot>

        </tfoot>
      </Table >

    </>
  )
}