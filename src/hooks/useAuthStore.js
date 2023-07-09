import { useDispatch, useSelector } from "react-redux"
import { checkingCredentials } from "../store/auth";
import { signInWithGoogle } from "../firebase/providers";

export const useAuthStore = () => {

    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const checkingAuthentication = () =>{
        dispatch(checkingCredentials());
    }

    const startGoogleSingIn = async () => {
        dispatch(checkingCredentials());
        const { ok, displayName , photoURL , email} = await signInWithGoogle();
        console.log({ ok, displayName , photoURL , email})
    }

    return {
        // methods
        checkingAuthentication,
        startGoogleSingIn
    }
}
