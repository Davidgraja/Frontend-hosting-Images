import { messages } from "../../helpers/messages"
import { useAuthStore, useForm } from "../../hooks"
import { FormBasic } from "./FormBasic"

export const FormRegister = () => {

    const { nombre , email , password  , onEventInput} = useForm({
        nombre : '',
        email : '',
        password : ''
    })

    const { startEmailAndPasswordRegister } = useAuthStore()

    const onSubmit = (event) =>{
        event.preventDefault()
        if(!nombre || !email || !password) return;

        if(nombre.trim().length < 4 ) {
            return messages('Atencion : el nombre debe de tener como minimo 4 caracteres' ,'linear-gradient(to right, #F1C40F  ,#F5B041)')
        }  
        
        if(password.trim().length < 6 ) {
            return messages('Atencion : La contraseña debe de contener como minimo 6 caracteres' ,'linear-gradient(to right, #F1C40F  ,#F5B041)')
        }

        startEmailAndPasswordRegister({ displayName : nombre , email , password })
    }
    return (
        <FormBasic btnText={'Registrarse'}  submitEvent={ onSubmit }>
            <input 
                type="text" 
                placeholder="Nombre" 
                className=" input w-full  mb-3 input-accent" 
                name="nombre"
                value={ nombre }
                onChange={ onEventInput }
            />

            <input 
                type="email" 
                placeholder="email" 
                className=" input w-full  mb-3 input-accent" 
                name="email"
                value={ email }
                onChange={ onEventInput }
            />

            <input 
                type="password" 
                placeholder="Contraseña" 
                className=" input  w-full  mb-3 input-accent" 
                name="password"
                value={ password }
                onChange={ onEventInput }
            />
        </FormBasic>
    )
}
