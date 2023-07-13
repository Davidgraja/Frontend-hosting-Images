import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react';
import { FormLogin, FormRegister, ProvidersBtn} from '../components';
import { useState } from 'react';
import { useAuthStore } from '../../hooks';

export const Login = () => {

    // hooks
    const {startGithubAndGoogleSinIn} = useAuthStore();

    const [formState, setformState] = useState(true);

    // methods
    const onGitHubAndGoogleSingIn = (provider= '') => {
        startGithubAndGoogleSinIn(provider);
    }

    return (
        <section className="h-full flex items-center justify-center">
            <div className="flex flex-col w-11/12 md:flex-row md:w-full md:justify-center ">
                <div className=" p-2 grid gap-3 h-auto card  rounded-box items-center ">

                    <ProvidersBtn 
                        btnColor={'btn-neutral'} 
                        icon={ <IconBrandGithub/>}
                        text={'GitHub'}
                        textColor={'text-white'}
                        clickEvent={() => onGitHubAndGoogleSingIn()}
                    />

                    <ProvidersBtn 
                        btnColor={'btn-active'} 
                        icon={ <IconBrandGoogle/>}
                        text={'Google'}
                        textColor={'text-black'}
                        clickEvent={() => onGitHubAndGoogleSingIn('google')}
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
