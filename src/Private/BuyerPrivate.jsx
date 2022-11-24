import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useRole from '../Hooks/useRole';
import Spinner from '../Shared/Spinner';

const BuyerPrivate = ({ children }) => {
    const { user } = useContext(AuthContext)
    const [role, userLoading] = useRole(user?.email)
    if (userLoading) {
        return <div><Spinner></Spinner></div>
    }
    if (role.role !== 'buyer') {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default BuyerPrivate;