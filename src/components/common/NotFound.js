import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='align-vertical-center'>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='center'>
            Page not found.
              </p>
        </div>
      </div>
      <Link to="/">
        <button type='button' className='waves-effect waves-light btn-custom'>
          Login
              </button>
      </Link>
    </div>
  );
}

export default NotFound;
