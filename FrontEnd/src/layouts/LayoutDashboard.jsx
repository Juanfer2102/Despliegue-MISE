import React from 'react';


import SideBarWrapper from '../helpers/sideBar';

import PropTypes from 'prop-types';

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

LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default LayoutDashboard;