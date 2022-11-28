import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [userLoading, setUserLoading] = useState(true)
    const [role, setRole] = useState('')

    useEffect(() => {
        fetch(`https://urban-eta.vercel.app/user/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRole(data)
                setUserLoading(false)
            })
    }, [email])

    return [role, userLoading, setRole];

};

export default useRole;