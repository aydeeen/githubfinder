import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faBiohazard} />;

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {element}
        {title}
      </h1>
       <ul>
         <li>
           <Link to='/'>Home</Link>
           <Link to="/about">About</Link>
         </li>
         <li></li>
       </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
