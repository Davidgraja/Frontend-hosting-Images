import { useState } from "react"
import { useForm } from "../../hooks";

import { IconX } from '@tabler/icons-react';

export const Modal = () => {

    const [newFolder, setNewFolder] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('Homer');
    const  {folderName , onEventInput}  = useForm({ folderName : ''})

    // todo : implementar al gestor de estado el cerrado del modal
    const [closeModal, setCloseModal] = useState(true)
    return (
        <>
            <section className="">
                <form
                     className={
                         `
                         z-10
                         absolute
                         top-[50%]
                         left-[50%]
                         translate-x-[-50%]  
                         translate-y-[-50%]
                         modal-box
                         border
                        ${ closeModal && 'hidden'}  
                        `
                    }
                    onSubmit={(e)=> e.preventDefault()}
                >

                    <div className="flex justify-end">
                        <IconX 
                            size={28} 
                            className="rounded-lg hover:bg-base-content hover:text-white hover:cursor-pointer"
                            onClick={()=> setCloseModal(true)}
                        />
                    </div>

                    <input type="file" className="file-input file-input-bordered w-full my-6" />

                    <p className="text-base mb-2">Selecione una carpeta</p>
                    <select 
                        className="select w-full mb-6 text-base" 
                        value={selectedFolder} 
                        onChange={(e)=> setSelectedFolder(e.target.value)}  
                        disabled={newFolder}

                    >
                        <option value={'homer'}>Homer</option>
                        <option value={'marge'}>Marge</option>
                        <option value={'bart'}>Bart</option>
                        <option value={'lisa'}>Lisa</option>
                        <option value={'magguie'}>Maggie</option>
                    </select>

                     
                    <div className="form-control mb-6">
                        <label className="label cursor-pointer">
                            <span className="label-text text-base">Crear nueva carpeta ?</span> 
                            <input 
                                type="checkbox"  
                                className="checkbox" 
                                checked={newFolder}
                                onChange={(e)=>setNewFolder(e.target.checked) } 
                                />
                        </label>
                    </div>

                    {
                        newFolder  &&
                         <input 
                            type="text"
                            name="folderName"
                            value={folderName}
                            onChange={onEventInput}
                            placeholder="Nombre de la carpeta"
                            autoComplete="off"
                            className="input w-full mb-6"
                        />
                    }

                    <button 
                        className="btn btn-outline btn-primary"
                        onClick={()=>{
                            
                            if(newFolder){
                                if(folderName.length == 0) return
                                console.log( folderName)
                                return
                            }   
                            else{
                                
                                console.log(selectedFolder)
                            }
                        }}
                    >
                        Guardar
                    </button>

                </form>
            </section>
        </>
    )
}
