import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [userLoading, setUserLoading] = useState(true)
    const [role, setRole] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRole(data)
                setUserLoading(false)
            })
    }, [email])

    return [role, userLoading];

};

export default useRole;