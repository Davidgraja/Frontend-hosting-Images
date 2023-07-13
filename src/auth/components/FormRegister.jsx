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
        console.log({nombre , email, password})

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
