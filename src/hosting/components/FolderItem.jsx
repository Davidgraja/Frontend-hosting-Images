import { IconTrash } from '@tabler/icons-react';

export const FolderItem = () => {
    return (
        <div className="card  w-80 bg-base-100 shadow-xl cursor-pointer">
            <figure><img src="https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Folder Name 
                </h2>
                <div className=" card-actions items-center  justify-center">
                    <div className="badge badge-outline">photos : 4</div> 
                    <button className="btn btn-xs btn-outline btn-error">
                        Delete Folder
                    </button>
                </div>
            </div>
        </div>
    )
}
