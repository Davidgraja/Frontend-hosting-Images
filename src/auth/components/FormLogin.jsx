import { FormBasic } from "./FormBasic"

export const FormLogin = () => {
    return (
        <FormBasic btnText={'Login'}>
            <input type="text" placeholder="Email" className=" input w-full  mb-3 input-accent" />
            <input type="password" placeholder="Contraseña" className=" input  w-full  mb-3 input-accent" />
        </FormBasic>
    )
}
