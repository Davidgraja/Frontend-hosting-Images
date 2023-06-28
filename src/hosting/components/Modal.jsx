import { useState } from "react"

export const Modal = () => {

    const [newFolder, setNewFolder] = useState(false);
    const [selectedFolder, setSelectedFolder] = useState('');
    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box ">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    
                    <input type="file" className="file-input file-input-bordered w-full my-6" />

                    <select 
                        className="select w-full mb-6" 
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
                            <span className="label-text">Crear nueva carpeta ?</span> 
                            <input 
                                type="checkbox"  
                                className="checkbox" 
                                checked={newFolder}
                                onChange={(e)=>setNewFolder(e.target.checked) } 
                                />
                        </label>
                    </div>

                    {
                        newFolder  && <input type="text" placeholder="Nombre de la carpeta" className="input w-full mb-6" />
                    }
                    

                    <button className="btn btn-primary">Guardar</button>
                </form>
            </dialog>
        </>
    )
}
