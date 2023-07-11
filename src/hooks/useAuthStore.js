import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials, login, logout } from "../store/auth";
import { signInWithGoogle , singInWithGitHub} from "../firebase/providers";
import axiosInstance from "../axios/axiosInstance";

export const useAuthStore = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkingAuthentication = () =>{
        dispatch(checkingCredentials());
    }

    const startGoogleSingIn = async () => {
        dispatch(checkingCredentials());
        
        const { ok, displayName , photoURL , email , providerId , errorMessage} = await signInWithGoogle();
        
        if(!ok) return dispatch(logout(errorMessage))
        
        const { data } = await axiosInstance.post('/auth/googleAndGithub' , { nombre : displayName , correo  : email , img : photoURL , provider : providerId} )
        
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
        
        const { ok , displayName , photoURL , email , providerId , errorMessage} = await singInWithGitHub();
        
        if(!ok) return dispatch(logout(errorMessage))
        
        const { data } = await axiosInstance.post('/auth/googleAndGithub' , { nombre : displayName , correo  : email , img : photoURL , provider : providerId} )

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

    return {
        // methods
        checkingAuthentication,
        startGoogleSingIn,
        startGitHubSingIn
    }
}
