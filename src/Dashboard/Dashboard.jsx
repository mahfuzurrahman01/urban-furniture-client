import React from 'react';

const Dashboard = () => {
    document.title = "Dashboard";
    return (
        <div className='lg:w-11/12 md:w-11/12 w-full mx-auto'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>All Sellers</a></li>
                        <li><a>All Buyers</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;