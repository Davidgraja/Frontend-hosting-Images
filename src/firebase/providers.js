import  {  GoogleAuthProvider ,  GithubAuthProvider , signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from "firebase/auth"
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () =>{

    try {
        const {user , providerId } = await signInWithPopup( FirebaseAuth , googleProvider);
        
        const {displayName , email , photoURL } = user;
        return {
            ok : true ,
            displayName , email , photoURL , providerId
        }
        
    } catch (error) {
        let errorMessage ;

        switch (error.code) {

            case 'auth/account-exists-with-different-credential':
                errorMessage = 'Ya existe la cuenta con otra credencial , intentelo con google o ingrese con su usuario y contraseña'
            break;
        
            case 'auth/cancelled-popup-request':
                errorMessage  = 'se ha cancelado la solicitud de authenticación'
            break

            case 'auth/popup-closed-by-user':
                errorMessage  = 'ventana cerrada'
            break

            default:
                errorMessage = error.code
            break;
        }
    
        return {
            ok : false,
            errorMessage
        }
    }

}

export const singInWithGitHub = async () => {
    try {
        const { user , providerId} = await signInWithPopup(FirebaseAuth , gitHubProvider); 
        const {displayName , email , photoURL } = user;
        

        return {
            ok : true ,
            displayName , email , photoURL , providerId  
        }

    } catch (error) {
        
        let errorMessage ;

        switch (error.code) {

            case 'auth/account-exists-with-different-credential':
                errorMessage = 'Ya existe la cuenta con otra credencial , intentelo con google o ingrese con su usuario y contraseña'
            break;
        
            case 'auth/cancelled-popup-request':
                errorMessage  = 'se ha cancelado la solicitud de authenticación'
            break

            case 'auth/popup-closed-by-user':
                errorMessage  = 'ventana cerrada'
            break

            default:
                errorMessage = error.code
            break;
        }
    
        return {
            ok : false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({email , password , displayName }) =>{
    try {   
        
        await createUserWithEmailAndPassword(FirebaseAuth ,  email ,  password);

        await updateProfile(FirebaseAuth.currentUser , { displayName });

        return {
            ok : true 
        }

    } catch (error) {
        let errorMessage;

        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage  = 'El correo ingresado ya se encuentra en uso'
            break;
            
            case 'auth/weak-password':
                errorMessage  = 'La contraseña es demasiado debil'
            break;

            default:
                errorMessage  = error.code
            break;
        }

        return { ok : false , errorMessage }
    }
}


export const singInWidthEmailAndPassword = async ({email , password}) => {
    try {
        const response = await signInWithEmailAndPassword(FirebaseAuth , email , password );
        const {displayName } = response.user;
        return {
            ok : true,
            displayName

        }
    } catch (error) {
        
        let errorMessage ; 

        switch (error.code) {
            case 'auth/wrong-password':
                errorMessage = 'El email o contraseña no son correctos , por favor verifiquelos e intente de nuevo'
            break;
            
            case 'auth/user-not-found':
                errorMessage = 'El email o contraseña no son correctos , por favor verifiquelos e intente de nuevo'
            break;

            case 'auth/too-many-requests':
                errorMessage = 'El acceso a esta cuenta se ha inhabilitado temporalmente debido a muchos intentos fallidos de inicio de sesión. Por favor intentelo más tarde'
            break;
        
            default:
                errorMessage  = error.code
            break;
        }
        
        return {
            ok: false ,
            errorMessage 
        }

    }
}
