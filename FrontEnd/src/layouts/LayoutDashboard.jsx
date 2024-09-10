
import SideBarWrapper from '../helpers/sideBar';
import PropTypes from 'prop-types';


const LayoutDashboard = ({ children }) => {


  return (
    <div className='flex'>
      <SideBarWrapper />
      <div className='w-full'>
        {children}
      </div>
    </div>
  );
};


LayoutDashboard.propTypes = {
  children: PropTypes.node,
};

export default LayoutDashboard;
