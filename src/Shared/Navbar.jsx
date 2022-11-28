import logo from '../assets/logo/V-Furniture.png'
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useRole from '../Hooks/useRole';

const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const [role, setRole] = useRole(user?.email)
    const logoutHandle = () => {
        logOut()
            .then(() => {
                toast.success('User logged out!')
                setRole('')
                navigate('/')
            })
            .catch((err) => { console.log(err) })
    }

    const navbar =
        <>
            <li><Link to='/'>Home</Link></li>
            {
                user?.email && !role?.message && <li><Link to='/dashboard'>Dashboard</Link></li>
            }
            <li><Link to='/blogs'>Blogs</Link></li>
            <li><Link to='/about'>About Us</Link></li>
        </>
   
    return (
        <div className="navbar md:w-11/12 w-full mx-auto md:py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className='flex space-x-2 items-center'>
                    <img src={logo} className='w-14 h-14 rounded-full' alt="" />
                    <p className='text-4xl font-light text-accent'>Urban</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {navbar}
                </ul>
            </div>
            <div className="navbar-end flex md:flex-row gap-1 flex-col">
                {
                    role?.message && <button className='py-1 px-4 bg-red-500 rounded text-white'>Restricted</button>
                }
                {
                    user?.email ? <button onClick={logoutHandle} className='py-1 px-4 bg-primary bg-gradient-to-r from-secondary rounded text-white'>Logout</button> : <Link to='/login'><button className='py-1 px-4 bg-primary bg-gradient-to-r from-secondary rounded text-white'>SignIn</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;