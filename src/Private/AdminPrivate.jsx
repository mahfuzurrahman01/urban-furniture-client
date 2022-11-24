import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useRole from '../Hooks/useRole';
import Spinner from '../Shared/Spinner';

const AdminPrivate = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const [role, userLoading] = useRole(user?.email)
    if (userLoading) {
        return <div><Spinner></Spinner></div>
    }
    if (role.role !== 'admin') {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default AdminPrivate;