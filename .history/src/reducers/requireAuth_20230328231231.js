import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "./authSlice"

const RequireAuth = () => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token ? <Navigate to="/dashboard" state={{ from: location }} replace />
            : <Navigate to="/home" state={{ from: location }} replace />
    )
}
export default RequireAuth;