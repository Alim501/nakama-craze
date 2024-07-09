import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom"

const RequireAuth=({children})=>{
    const location=useLocation()
    const user = useSelector(state => state.user.user);
    if(!user){
        return <Navigate to={"/auth"}  state={{from:location}}/>;
    }
    return children
}

export {RequireAuth};