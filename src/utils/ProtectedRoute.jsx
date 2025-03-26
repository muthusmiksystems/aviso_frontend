import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const { user } = useSelector((state) => state.auth); // Redux state
    
    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
