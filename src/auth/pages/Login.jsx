import { FormLogin, FormRegister} from '../components';
import { useState } from 'react';

export const Login = () => {

    const [formState, setformState] = useState(true);

    return (
        <section className="h-full flex items-center justify-center">
            <div className="flex flex-col w-11/12 md:flex-row md:w-full md:justify-center ">
                
                <div className="grid h-auto card  rounded-box place-items-center">

                    <div >
                        <h2  className="text-lg text-gray-400 ">Login manual</h2>
                        <p className=" ml-2 cursor-pointer text-blue-600 underline" onClick={() => setformState(!formState)}> 
                            {
                                formState ? 'Registrarme' : 'Iniciar sesión'
                            }
                        </p> 
                    </div>

                    {
                        formState ? <FormLogin/> : <FormRegister/>
                    } 

                </div>
            </div>
        </section>
    )
}
