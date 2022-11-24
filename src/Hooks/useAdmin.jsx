import React, { useEffect, useState } from 'react';

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/${email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [email])
};

export default useAdmin;

