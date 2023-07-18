import { Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from '../pages/Homepage'

export const HostingRoutes = () => {
    return (
    
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/*' element={<Navigate to={'/'}/>}/>
        </Routes>
    )
}
