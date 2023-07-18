import { useDispatch, useSelector } from "react-redux"
import { activeDarkMode, disableDarkMode } from "../store/theme";
import { useState } from "react";

export const useThemeStore = () => {
    const { darkMode} = useSelector(state => state.theme)

    const [toggle, settoggle] = useState(true)

    const dispatch = useDispatch();

    const startChangeMode = () =>{

        toggle ? dispatch( activeDarkMode() ) : dispatch( disableDarkMode() )

    }

    const startChangeToggle = () =>{
        settoggle(!toggle)
    }

    return (
        {
         // properties
            darkMode,
            toggle,

            // Methods
            startChangeMode,
            startChangeToggle
        }
    )
}
