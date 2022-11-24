import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    document.title = "Dashboard";
    return (
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto'>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile relative">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <h1 className='text-xs text-center my-2'>Hello Admin Good evening! This Route is only visible at Admins!</h1>
                    <label htmlFor="my-drawer-2" className="btn btn-primary btn-xs w-[10%] absolute top-0 right-0 text-white drawer-button lg:hidden">Menu</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 border-r-2 border-t-2 border-amber-100 text-base-content flex flex-col space-y-2 ">
                        <li><Link to='/dashboard/allSellers' className='shadow shadow-primary rounded'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allBuyers' className='shadow shadow-primary rounded'>All Buyers</Link></li>
                        <li><Link to='/dashboard/myProducts' className='shadow shadow-primary rounded'>My Products</Link></li>
                        <li><Link to='/dashboard/addProducts' className='shadow shadow-primary rounded'>Add Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;