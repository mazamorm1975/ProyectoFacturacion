import { useEffect, useReducer } from "react";
import { getUserListFromDatabase, userRegistrationIntoDB, userUpdateIntoDB } from "../serviceUser/serviceUser";
import { userReducer } from "../useReducer/userReducer";
import { userSetList, userRegistration, userUpdate } from "../useReducer/userActions";
import { toast } from "react-toastify";


const infoInicial = JSON.parse(sessionStorage.getItem('info')) || [];

export const useUserInfo = () => {

  const [userItems, dispatch] = useReducer(userReducer, infoInicial);


  useEffect(() => {
    sessionStorage.setItem('info', JSON.stringify(userItems));
  }, [userItems]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserListFromDatabase();
        dispatch({ type: userSetList, payload: data || [] });
      } catch (err) {
        console.error('Error capturado en hook:', err.message || err);
      }
    };

    fetchUsers();
  }, []);

  /*
    const handlerUserRegistration = (userInfo) => {
  
      dispatch({
        type: userRegistration,
        payload: userInfo
      });
  
      userRegistrationIntoDB(userInfo).then(response => {
        toast.success('Producto guardado exitosamente en la base de datos');
      }).
        catch(error => {
          console.log('Error capturado en hook:', error.message);
          toast.error(`Error: ${error.message}`);
        })
    }*/

  const handlerUserRegistration = async (userInfo) => {
    dispatch({
      type: userRegistration,
      payload: userInfo
    });
    try {
      const response = await userRegistrationIntoDB(userInfo);
      toast.success('Producto guardado exitosamente en la BD');
      return { success: true };

    } catch (error) {
      console.log('Error capturado en hook:', error.message);
      toast.error(`Error: ${error.message}`);
      return { success: false };
    }
  };

    const handlerUserUpdate = async (userInfoUpdate) => {
      const { id, ...userInfoPayload } = userInfoUpdate;

    dispatch({
      type: userUpdate,
      payload: userInfoUpdate
    });
    try {
        const response = await userUpdateIntoDB(id, userInfoPayload);
      toast.success('Producto Actualizado exitosamente en la BD');
      return { success: true };

    } catch (error) {
      console.log('Error capturado en hook:', error.message);
      toast.error(`Error: ${error.message}`);
      return { success: false };
    }
  }

  return [
    userItems,
    handlerUserRegistration,
    handlerUserUpdate
  ]
}