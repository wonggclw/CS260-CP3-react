import { Outlet, Link } from "react-router-dom";

const NavBarLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/layouts">Layouts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavBarLayout;