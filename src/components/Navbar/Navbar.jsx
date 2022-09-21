import BtnNav from "./BtnNav"

import "./styles.css"

const pages = [
  { title: "home", arrow: false, link:"/" },
  { title: "about", arrow: false, link:"/about" },
  { title: "contact", arrow: false, link:"/contact" },
]

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <div className="logo">
          <a href="/">Dr Sotelo</a>
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
