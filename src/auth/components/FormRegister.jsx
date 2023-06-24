import { FormBasic } from "./FormBasic"

export const FormRegister = () => {
    return (
        <FormBasic btnText={'Registrarse'}>
            <input type="text" placeholder="Nombre" className=" input w-full  mb-3 input-accent" />
            <input type="email" placeholder="Email" className=" input w-full  mb-3 input-accent" />
            <input type="password" placeholder="Contraseña" className=" input  w-full  mb-3 input-accent" />
        </FormBasic>
    )
}
