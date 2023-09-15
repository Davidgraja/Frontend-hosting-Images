import {  FolderItem } from "./FolderItem"

export const ContainerFolders = () => {
    return (
        <section 
            className=" mt-3 bg-inherit grid grid-cols-folderItems justify-evenly gap-5"
        >
            <FolderItem/>
            <FolderItem/>
            <FolderItem/>
            <FolderItem/>
            <FolderItem/>
            <FolderItem/>
        </section>
    )
}
