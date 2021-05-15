import React from 'react';

import logo from '../../assets/images/logo.png';

const classes = {
};

const Header = () => {
  const [auth, setAuth] = React.useState(true);

  return (
    <div className="appbar row">
      <div style={{
          font: 'normal normal bold 22px/27px Helvetica Neue',
          color: 'white'
        }}>
        <span style={{color: 'white'}}>My</span><span style={{color: '#43AFFF'}}>Jobs</span>
      </div>
        <div style={{float: 'right'}}>
        {/* {auth && (
          <button type="button" className="login">Login/Signup</button>
        )} */}
        <div className="applied" onClick={() => {}}>
          Applied Jobs
        </div>
        </div>
      </div>
  );
};

export default Header;