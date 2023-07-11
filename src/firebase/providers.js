import  {  GoogleAuthProvider ,  GithubAuthProvider , signInWithPopup, createUserWithEmailAndPassword} from "firebase/auth"
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () =>{

    try {
        const {user } = await signInWithPopup( FirebaseAuth , googleProvider);
        
        const {displayName , email , photoURL } = user;
        return {
            ok : true ,
            displayName , email , photoURL 
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
        const { user } = await signInWithPopup(FirebaseAuth , gitHubProvider); 
        const {displayName , email , photoURL } = user;
        

        return {
            ok : true ,
            displayName , email , photoURL ,  
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
        
        const response = await createUserWithEmailAndPassword(FirebaseAuth ,  email ,  password);
        const { photoURL} = response.user;

        await updateProfile(FirebaseAuth.currentUser , { displayName }) 
        
        return {
            ok : true ,
            photoURL , email , displayName
        }

    } catch (error) {
        // if(error.message.includes('auth/email-already-in-use')) return { ok : false , errorMessage : 'El correo ingresado ya se encuentra en uso'}
        // return { ok : false , errorMessage : error.message}
        console.log(error)
    }
}
