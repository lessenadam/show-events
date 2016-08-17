import React from 'react';

const Nav = ({ clickHandler }) => (
  <div>
    <button onClick={clickHandler}>
      {'Refresh now'}
    </button>
  </div>
);

Nav.defaultProps = {
  clickHandler: React.PropTypes.func
};

export default Nav;
