import { useUserInfo } from './hooks/useUserInfo';
import './css/App.css';
import { UserRoutes } from './routes/userRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp() {

    const [userItems, handlerUserRegistration, handleUserUpdate, handlerUserDeletion] = useUserInfo();

    return (
        <>
            <UserRoutes
                handleUserUpdate={handleUserUpdate}
                handlerUserDeletion={handlerUserDeletion}
                handlerUserRegistration={handlerUserRegistration}
                userItems={userItems}
                                />
            <ToastContainer position='bottom-right' autoClose={3000} />
        </>
    )
} 