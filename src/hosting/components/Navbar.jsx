import { useState } from "react"
import { useAuthStore } from "../../hooks/useAuthStore"
import { useThemeStore } from "../../hooks"

export const Navbar = () => {
    const { displayName , photoURL , startLogout } = useAuthStore()
    const { startChangeMode , toggle , startChangeToggle} = useThemeStore()

    const onLogout = () =>{
        startLogout()
    }

    const onChangeMode = () =>{
        startChangeToggle()
        startChangeMode(toggle)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <div className="dropdown">
                    
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><p onClick={()=>window.my_modal_3.showModal()}>Subir archivo</p></li>
                    <li><a>Mis imagenes</a></li>
                    </ul>

                </div>

                <a className="btn btn-ghost normal-case text-xl">{ displayName }</a>

            </div>

            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal px-1">
                    <li onClick={()=>window.my_modal_3.showModal()}><p>Subir archivo</p></li>
                    <li><a>Mis imagenes</a></li>
                </ul>

            </div>

            <div className=" navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">

                        {/* todo : implementar la foto de perfil del usuario */}
                        <div className="w-10 rounded-full">
                            <img src="https://lh3.google.com/u/0/ogw/AOLn63E6m2d64F3Se5pByMw6nnFhKGLZHxLNNx6uwV71=s32-c-mo" />
                        </div>

                    </label>
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <li>
                            <label className="label" >
                                <span className=" label-text"> Modo oscuro </span>
                                <input 
                                    type="checkbox" 
                                    className="toggle toggle-success" 
                                    onClick={onChangeMode}
                                />
                            </label>
                        </li>
                        <li><a>Eliminar cuenta</a></li>
                        <li onClick={onLogout}> <a>Salir</a> </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}
