import React from 'react';

const Nav = ({ clickHandler }) => (
  <nav>
    <div className="nav-wrapper light-blue lighten-5">
      <img 
        className="logo"
        src="resources/powered-by-sysdig.png"
        alt="logo"
        height="60px"
        width="60px"
      />
      <ul id="nav-mobile" className="refresh-container right hide-on-med-and-down">
        <li><a onClick={clickHandler} className="waves-effect waves-light btn-flat">Refresh now</a></li>
      </ul>
    </div>
  </nav>
);

Nav.defaultProps = {
  clickHandler: React.PropTypes.func
};

export default Nav;
