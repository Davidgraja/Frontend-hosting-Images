import { IconBrandFacebook , IconBrandGoogle } from '@tabler/icons-react';
import { FormLogin, FormRegister, ProvidersBtn} from '../components';
import { useState } from 'react';

export const Login = () => {

    const [formState, setformState] = useState(true)

    return (
        <section className="h-full flex items-center justify-center">
            <div className="flex flex-col w-11/12 md:flex-row md:w-full md:justify-center ">
                <div className=" p-2 grid gap-3 h-auto card  rounded-box items-center ">

                    <ProvidersBtn 
                        btnColor={' btn-primary'} 
                        icon={ <IconBrandFacebook/>}
                        text={'Facebook'}
                        textColor={'text-white'}

                    />

                    <ProvidersBtn 
                        btnColor={'btn-neutral'} 
                        icon={ <IconBrandGoogle/>}
                        text={'Google'}
                        textColor={'text-white'}

                    />
                
                </div> 
            
                <div className="divider md:divider-horizontal ">O</div> 
            
            
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
