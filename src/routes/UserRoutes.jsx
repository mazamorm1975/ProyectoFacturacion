import { Routes, Route } from "react-router-dom"
import { LoginView } from "../componentes/LoginView"
import { ListadoView } from "../componentes/ListadoView"
import { RegistrationView } from "../componentes/RegistratonView"
import { EdicionUsuario } from "../componentes/EdicionUsuario"

export const UserRoutes = ({ userItems, handlerUserRegistration, handleUserUpdate, handlerUserDeletion}) => {

    return (
        <Routes>
            <Route path="/" element={<LoginView />} />
            <Route path="/listado" element={<ListadoView articulos={userItems} onDeleteUser={handlerUserDeletion} />} />
            <Route path="/nuevo_registro" element={
                <RegistrationView  handler={usuario => handlerUserRegistration(usuario)}/>}/>
            <Route path="/editar/:id" element={
                <EdicionUsuario articulos={userItems} handlerUpdate={usuario1 => handleUserUpdate(usuario1) } />}/>
        </Routes>
    )
}