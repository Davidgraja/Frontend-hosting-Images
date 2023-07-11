import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, login, logout } from "../store/auth";
import { signInWithGoogle , singInWithGitHub , registerUserWithEmailPassword  } from "../firebase/providers";
import axiosInstance from "../axios/axiosInstance";

export const useAuthStore = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkingAuthentication = () =>{
        dispatch(checkingCredentials());
    }

    const startGoogleSingIn = async () => {
        dispatch(checkingCredentials());
        
        const { ok, displayName , photoURL , email , errorMessage} = await signInWithGoogle();
        
        if(!ok) return dispatch(logout(errorMessage))
        
        const { data } = await axiosInstance.post('/auth/google' , { nombre : displayName , correo  : email , img : photoURL} )
        
        if(data.ok){
            
            const { user , token  } = data;

            dispatch(login( {
                correo : email,
                displayName,
                photoURL,
                uid : user.uid
            }))

            localStorage.setItem('x-token' , token);
        }
        
        else dispatch(logout())
    }

    const startGitHubSingIn = async () => {
        dispatch(checkingCredentials());
        
        const { ok , displayName , photoURL , email  , errorMessage} = await singInWithGitHub();
        
        if(!ok) return dispatch(logout(errorMessage))
        
        const { data } = await axiosInstance.post('/auth/github' , { nombre : displayName , correo  : email , img : photoURL} )

        if(data.ok){
            
            const { user , token  } = data;

            dispatch(login( {
                correo : email,
                displayName,
                photoURL,
                uid : user.uid
            }))

            localStorage.setItem('x-token' , token);
        }
        
        else dispatch(logout())
    }

    const startEmailAndPasswordSinIn = () =>{
        registerUserWithEmailPassword()
    }

    return {
        // methods
        checkingAuthentication,
        startGoogleSingIn,
        startGitHubSingIn
    }
}
