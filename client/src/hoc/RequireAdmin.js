import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux";

const RequireAdmin=({children})=>{
    const user = useSelector(state => state.user.user);
    if( user.role!=='admin'){
        return <Navigate to={"/"}/>;
    }
    return  children
}

export {RequireAdmin};