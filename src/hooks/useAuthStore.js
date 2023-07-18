import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, login, logout } from "../store/auth";
import axiosInstance from "../axios/axiosInstance";
import { messages } from "../helpers/messages";

export const useAuthStore = () => {

    const { status , errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkingAuthentication = () =>{
        dispatch(checkingCredentials());
    }


    const startEmailAndPasswordRegister = async ({email , password , displayName }) =>{

        try {

            dispatch(checkingCredentials());

            const { data } = await axiosInstance.post('/users' , { nombre : displayName , correo  : email , password } );
            
            const { usuario , token } = data;
    
            dispatch(login( {
                email,
                displayName,
                photoURL : usuario.img,
                uid :usuario.uid
            }))

            localStorage.setItem('x-token' , token);

            messages(`Bienvenido ${displayName}`,'linear-gradient(to right, #28B463 , #58D68D)')

            
        } catch (error) {
            console.log(error)
            dispatch(logout(error.response.data.msg))    
        }

    }

    const startEmailAndPasswordSingIn = async ({email , password}) =>{
        
        try {
            dispatch(checkingCredentials());
            const {data} = await axiosInstance.post('/auth/login' , { correo  : email , password} );

            const { user , token  } = data;

            dispatch(login( {
                email,
                displayName : user.nombre,
                photoURL : user.img,
                uid :user.uid
            }))

            localStorage.setItem('x-token' , token);

            messages(`Bienvenido ${user.nombre}`,'linear-gradient(to right, #28B463 , #58D68D)')
            
        } catch (error) {

            console.log(error)
            dispatch(logout(error.response.data.msg))
        }

    }

    // const startCheckAuthToken = async () =>{
    //     const token = localStorage.getItem('token');
    //     if(!token) return dispatch(logout());
    // }
    return {
        // Properties
        status,
        errorMessage,


        // methods
        checkingAuthentication,
        startEmailAndPasswordRegister,
        startEmailAndPasswordSingIn,
        // startCheckAuthToken
    }
}
