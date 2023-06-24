
export const FormBasic = ({ children, btnText }) => {
    return (
        <form className="mt-3 max-w-[530px]">
            { children }
            <button className="btn  btn-accent w-full text-white">{ btnText }</button>
        </form>
    )
}

