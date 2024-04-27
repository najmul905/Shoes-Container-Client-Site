import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
const PrivetRouter = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if (loading){
        return <div className='flex h-screen items-center justify-center'><span className="loading loading-spinner loading-md"></span></div>
    }
    if(user){
        return children
    }
     return <Navigate to='/singIn' state={{form:location}}></Navigate>
};

export default PrivetRouter;