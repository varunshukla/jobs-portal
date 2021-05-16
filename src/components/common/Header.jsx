import React from 'react';
import Avatar from 'react-avatar';
import { Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
  const [auth, setAuth] = React.useState(true);
  const [user, setuser] = React.useState(JSON.parse(window.localStorage.getItem('user')));
  const history = useHistory();
  
  React.useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    setAuth(window.localStorage.getItem('token') || null);
    setuser(user);

  }, [auth]);

  const logout = async () => {
    await window.localStorage.clear();
    setTimeout(function () {
      history.replace('/');
      window.location.reload();
    }, 1000);
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
      { user?.userRole === 1 &&
        <Link className="applied" to="/candidate/applied">
          Applied jobs
        </Link>
      }
      { user?.userRole === 0 && 
          <Link className="applied" to="/recruiter/post-job">
            Post a job
          </Link>
      }
      { auth && 
        <Form inline>
          <Avatar name={user?.name} round size={40} color="gray" alt="U"/>
          <NavDropdown id="basic-nav-dropdown">
              <NavDropdown.Item className="cursor" onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Form>
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
