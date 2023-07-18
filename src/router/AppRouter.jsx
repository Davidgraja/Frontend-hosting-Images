import { useEffect } from "react"
import { AuthRoutes } from "../auth/router/AuthRoutes"
import { Loading } from "../components"
import { useAuthStore } from "../hooks"
import { HostingRoutes } from "../hosting/router/HostingRoutes"

export const AppRouter = () => {

    const { status } = useAuthStore();

    // useEffect(() => {
    //     startCheckAuthToken()
    // }, [])
    
    return (
        <>
            {
                status == 'checking' ? <Loading/> :
                status != 'authenticated' ? <AuthRoutes/> : <HostingRoutes/>
            }
        </>
    )
}
