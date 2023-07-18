import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/auth' element={<Login/>}/>
            <Route path='/*' element={<Navigate to={'/auth'}/>}/>
        </Routes>
    )
}
