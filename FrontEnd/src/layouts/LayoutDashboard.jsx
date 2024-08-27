import React from 'react';
import SideBarWrapper from '../helpers/sideBar';

const LayoutDashboard = ({ children }) => {
    return (
        <>
            <SideBarWrapper />
            <div className='w-full'>
                {children}
            </div>
        </>
    )
}

export default LayoutDashboard;