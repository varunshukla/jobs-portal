import React from 'react';
import Avatar from 'react-avatar';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [user, setuser] = React.useState({role: 'candidate'});
  
  React.useEffect(() => {
    const user = window.localStorage.getItem('user');
    
    setAuth(window.localStorage.getItem('token'));
    // setuser(user);

  }, [auth]);

  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <Navbar bg="#43AFFF" expand="lg" className="appbar">
      <Navbar.Brand>
        <div style={{
          color: 'white',
          font: 'normal normal bold 22px/27px Helvetica Neue',
        }}>
          My<span style={{ color: '#43AFFF' }}>Jobs</span>
        </div>
      </Navbar.Brand>
    <Nav className="mr-auto">
    </Nav>
      { user.role === 'candidate' &&
        <Link className="applied" to="/candidate/applied">
          Applied jobs
        </Link>
      }
      { user.role === 'recruiter' && 
          <Link className="applied" to="/recruiter/post-job">
            Post a job
          </Link>
      }
      { auth && 
        <div>
          <Avatar name="We make" round size={40} color="gray" />
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      }

      { !auth && 
        (
        <button type="button" className="login">
          <Link to="/login" style={{
            textDecoration: 'none',
            color: 'white',
          }}>
            Login/Signup
          </Link>
        </button>
          )
        }
  </Navbar>
  );
};

export default Header;
