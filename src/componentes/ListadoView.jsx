import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Navbar } from './Navbar';


export const ListadoView = ({ articulos }) => {
  const navigate = useNavigate();

  const handleActualizar = (id) => {
    navigate(`/editar/${id}`);
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