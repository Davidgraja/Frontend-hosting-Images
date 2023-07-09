
export const ProvidersBtn = ({btnColor , icon , textColor , text , clickEvent}) => {
    return (
        <div className={`gap-3  ${textColor} min-w-[120px]  btn ${ btnColor}`} onClick={clickEvent}>
            { icon }
            <p>{ text }</p>
        </div>
    )
}
