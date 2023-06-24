
export const ProvidersBtn = ({btnColor , icon , textColor , text}) => {
    return (
        <div className={`gap-3  ${textColor} min-w-[120px]  btn ${ btnColor}`}>
            { icon }
            <p>{ text }</p>
        </div>
    )
}
