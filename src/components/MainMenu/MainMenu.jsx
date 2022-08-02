import { NavLink, Outlet } from 'react-router-dom';
import css from './style.module.css';

const { navigateBar, styleLink } = css;

const MainMenu = () => {
  return (
    <>
      <nav className={navigateBar}>
        <NavLink className={styleLink} to="/">
          Home
        </NavLink>
        <NavLink className={styleLink} to="/movies">
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
