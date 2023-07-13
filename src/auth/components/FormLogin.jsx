import { useAuthStore, useForm } from "../../hooks"
import { FormBasic } from "./FormBasic"

export const FormLogin = () => {
    //* hooks
    const { email , password , onEventInput} = useForm({
        email : '',
        password : ''
    })

    const{ startEmailAndPasswordSingIn } = useAuthStore()

    const onSubmit = (event) =>{
        event.preventDefault()
        if(!email || !password) return;
        startEmailAndPasswordSingIn({email, password})
    }

    return (
        <FormBasic btnText={'Login'} submitEvent={onSubmit}>
            <input 
                type="email" 
                placeholder="Email" 
                className=" input w-full  mb-3 input-accent"
                name="email" 
                value={email}
                onChange={onEventInput}
            />
            <input 
                type="password" 
                placeholder="Contraseña" 
                className=" input  w-full  mb-3 input-accent" 
                name="password" 
                value={password}
                onChange={onEventInput}
            />
        </FormBasic>
    )
}
