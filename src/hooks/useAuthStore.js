import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, login, logout } from "../store/auth";
import { registerUserWithEmailPassword , singInWidthEmailAndPassword  , googleAndGithubProvider} from "../firebase/providers";
import axiosInstance from "../axios/axiosInstance";

export const useAuthStore = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkingAuthentication = () =>{
        dispatch(checkingCredentials());
    }


    const startGithubAndGoogleSinIn = async ( provider = '' ) => {
        dispatch(checkingCredentials());

        const { ok, displayName , photoURL , email , errorMessage , providerId} = await  googleAndGithubProvider(provider);
        
        if(!ok) return dispatch(logout(errorMessage))
    
        try {
            const { data } = await axiosInstance.post('/auth/providers' , { nombre : displayName , correo  : email , img : photoURL , provider : providerId} )
        
            const { user , token  } = data;

            dispatch(login( {
                email,
                displayName,
                photoURL,
                uid : user.uid
            }))

            localStorage.setItem('x-token' , token);

        
        } catch (error) {
            
            dispatch(logout(error.response.data.msg))
            // todo : hacer el dispatch de del logout en firebase
        }

    }

    const startEmailAndPasswordRegister = async ({email , password , displayName }) =>{
        dispatch(checkingCredentials());
        const { ok  , errorMessage} =  await registerUserWithEmailPassword({email , password , displayName })
        if(!ok) return dispatch(logout(errorMessage))

        try {
            const { data } = await axiosInstance.post('/users' , { nombre : displayName , correo  : email , password } );
            const { usuario , token } = data;
    
            dispatch(login( {
                email,
                displayName,
                photoURL : usuario.img,
                uid :usuario.uid
            }))

            localStorage.setItem('x-token' , token);

            
        } catch (error) {
            dispatch(logout(error.response.data.msg))
            // todo : hacer el dispatch de del logout en firebase
            
        }

    }

    const startEmailAndPasswordSingIn = async ({email , password}) =>{
        
        dispatch(checkingCredentials());

        const { ok , displayName , errorMessage } =  await singInWidthEmailAndPassword( { email , password});
        
        if(!ok) return dispatch(logout(errorMessage))
        
        try {
            const { data } = await axiosInstance.post('/auth/login' , { correo  : email , password} )

            
            const { user , token  } = data;

            dispatch(login( {
                email,
                displayName,
                photoURL : user.img,
                uid :user.uid
            }))

            localStorage.setItem('x-token' , token);
        
        } catch (error) {
            
            dispatch(logout(error.response.data.msg))
            // todo : hacer el dispatch de del logout en firebase
        }

    }

    return {
        // methods
        checkingAuthentication,
        startGithubAndGoogleSinIn,
        startEmailAndPasswordRegister,
        startEmailAndPasswordSingIn
    }
}
