export const FolderItem = () => {
    return (
        <div className="card  w-80 bg-base-100 shadow-xl cursor-pointer">
            <figure><img src="https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Folder name 
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">photos : 4</div> 
                <div className="badge badge-outline badge-error cursor-pointer">Delete</div>
                </div>
            </div>
        </div>
    )
}
