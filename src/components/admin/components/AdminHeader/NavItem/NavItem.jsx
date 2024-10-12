/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, label, className, onClick }) => (
  <NavLink to={to} className={`${className} nav-link`} onClick={onClick}>
    {icon}
    <span>{label}</span>
  </NavLink>
);

export default NavItem;
