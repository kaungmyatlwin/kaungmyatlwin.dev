import React from 'react';
import PropTypes from 'prop-types';
import './SideNavigation.scss';

const subList = [
  { key: 'home', text: 'Home' },
  { key: 'expertise', text: 'Expertise' },
  { key: 'contact', text: 'Contact' },
];

const Header = ({ activeNav }) => {
  return (
    <div className="SideNavigation">
      <ul>
        {
          subList.map(({ key, text }, i) => (
            <li key={i} className={activeNav === key ? 'active' : ''}>{text}</li>
          ))
        }
      </ul>
    </div>
  );
}

Header.propTypes = {
  activeNav: PropTypes.string.isRequired,
}

export default Header;
