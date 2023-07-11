import  {  GoogleAuthProvider ,  GithubAuthProvider , signInWithPopup} from "firebase/auth"
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

export const signInWithGoogle = async () =>{

    try {
        const {user , providerId} = await signInWithPopup( FirebaseAuth , googleProvider);
        
        const {displayName , email , photoURL } = user;
        return {
            ok : true ,
            displayName , email , photoURL , providerId 
        }
        
    } catch (error) {
        let errorMessage = '';  

        if(error.message.includes('cancelled-popup-request')) errorMessage = 'se ha cancelado la authenticación'
        else if(error.message.includes('popup-closed-by-user')) errorMessage = 'haz cerrado el cuadro de authenticación'
    
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
        console.log(error)
        let errorMessage = '';  

        if(error.message.includes('cancelled-popup-request')) errorMessage = 'se ha cancelado la authenticación'
        else if(error.message.includes('popup-closed-by-user')) errorMessage = 'haz cerrado el cuadro de authenticación'
        else if(error.message.includes('account-exists-with-different-credential')) errorMessage = 'ya existe una cuenta con tus mismas credenciales , por favor intenta acceder con la otra cuenta o crea un usuario nuevo'
    
        return {
            ok : false,
            errorMessage
        }
    }
}

