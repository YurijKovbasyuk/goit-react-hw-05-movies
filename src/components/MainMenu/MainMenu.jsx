import { NavLink, Outlet } from 'react-router-dom';

const navStyles = {
  padding: '10px 30px ',
  display: 'flex',
  justifyContent: 'start',
  boxShadow: '0 0 10px rgba(0,0,0,0.22)',
};

const MainMenu = () => {
  return (
    <>
      <nav style={navStyles}>
        <NavLink
          active={{ color: 'red' }}
          to="/"
          style={{
            fontSize: '36px',
            color: 'black',
            marginRight: '10px',
            textDecoration: 'none',
          }}
        >
          Home
        </NavLink>
        <NavLink
          active={{ color: 'red' }}
          to="/movies"
          style={{
            fontSize: '36px',
            color: 'black',
            marginRight: '10px',
            textDecoration: 'none',
          }}
        >
          Movies
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainMenu;
