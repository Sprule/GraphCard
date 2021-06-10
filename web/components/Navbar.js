import axios from 'axios';
import Link from 'next/link';
import { useContext } from 'react';
import router from 'next/router';
import { UserContext } from '../providers/UserProvider';
import NavbarContainer, { NavButton } from './Navbar.style';

const Navbar = () => {
  const userContext = useContext(UserContext);

  const logout = (e) => {
    e.preventDefault();
    axios.post('/auth/logout').then(() => {
      console.log('Logout Success');
      router.push('/');
      userContext.state.setUser(null);
    });
  };

  return (
    <NavbarContainer>
      <div className="content">
        <Link href="/">
          <div className="logo-container">
            <img className='logo' src="/logo.png"></img>
            GraphCard
          </div>
        </Link>
        <div style={{ flex: 1 }} />
        {!userContext.user && (
          <div className="buttons">
            <NavButton>
              <Link href="/login">
                <a> Log In</a>
              </Link>
            </NavButton>
            <NavButton>
              <Link href="/signup">
                <a> Sign Up</a>
              </Link>
            </NavButton>
          </div>
        )}
        {userContext.user && (
          <>
            <Link href={`/profile/${userContext.user.username}`}>
              <a>
                <span className="username">{userContext.user.username}</span>
              </a>
            </Link>
            <NavButton onClick={() => {
              router.push('/settings')
            }}>
              <a>Settings</a>
            </NavButton>
            <NavButton onClick={logout}>
              <a>Log out</a>
            </NavButton>
          </>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
