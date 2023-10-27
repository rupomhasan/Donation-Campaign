import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="md:flex gap-10 text-xl ">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "text-red-400 underline":''}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/donation`}
          className={({ isActive }) => isActive ? "text-red-400 underline":''}
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive }) => isActive ? "text-red-400 underline":''}
        >
          Statistics
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
