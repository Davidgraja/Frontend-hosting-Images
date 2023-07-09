
export const FormBasic = ({ children, btnText , submitEvent }) => {
    return (
        <form className="mt-3 max-w-[530px]" onSubmit={submitEvent}>
            { children }
            <button className="btn  btn-accent w-full text-white" type="submit">{ btnText }</button>
        </form>
    )
}

