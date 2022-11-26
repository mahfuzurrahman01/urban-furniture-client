import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useRole from '../Hooks/useRole';
import Navbar from '../Shared/Navbar';
import Spinner from '../Shared/Spinner';

const Dashboard = () => {
    document.title = "Dashboard";
    const { user, loading } = useContext(AuthContext)
    const [role, userLoading] = useRole(user?.email)
    console.log(role)
    if (loading || userLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto'>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile relative">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className='w-full flex justify-between items-center'>
                        <p className='border text-sm font-semibold p-1 ml-2 border-amber-200'>Hey {user?.displayName}, This is your dashboard</p>
                        <button className='text-white my-2 bg-primary bg-gradient-to-r from-secondary rounded py-1 px-3'>{role.role} dashboard</button>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary btn-xs w-[10%] absolute top-0 right-0 text-white drawer-button lg:hidden">Menu</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 lg:w-64 w-1/2 lg:bg-transparent bg-white border-r-2 border-t-2 border-amber-100 text-base-content flex flex-col space-y-2 ">

                        {
                            role.role === 'admin' && <> <li><Link to='/dashboard/allSellers' className='shadow shadow-primary rounded'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allBuyers' className='shadow shadow-primary rounded'>All Buyers</Link></li></>
                        }

                        {
                            role.role === 'seller' && <><li><Link to='/dashboard/myProducts' className='shadow shadow-primary rounded'>My Products</Link></li>
                                <li><Link to='/dashboard/addProducts' className='shadow shadow-primary rounded'>Add Products</Link></li></>
                        }
                        {
                            role.role === 'buyer' && <>
                                <li><Link to='/dashboard/myOrders' className='shadow shadow-primary rounded'>My Orders</Link></li>
                                <li><Link to='/dashboard/myWishlist' className='shadow shadow-primary rounded'>My Wishlist</Link></li></>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;