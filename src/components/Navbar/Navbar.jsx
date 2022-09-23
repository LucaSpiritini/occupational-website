import { NavLink } from "react-router-dom";
import BtnNav from "./BtnNav"

import "./styles.css"

const pages = [
  { title: "Home", arrow: false, link:"/" },
  { title: "About", arrow: false, link:"/about" },
  { title: "Contact", arrow: false, link:"/contact" },
]

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <div className="logo">
          <NavLink to="/">
            Dr Sotelo
          </NavLink>
        </div>
      </div>

      <div className="navbar-center">
        <div className="toggle">|||</div>
      </div>

      <div className="navbar-right">
        {
          pages.map((page,index) => (
            <BtnNav page={ page } key={ index } />
          ))
        }
      </div>

      

    </div>
  );
};

export default Navbar
