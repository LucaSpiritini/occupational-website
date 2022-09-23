import { NavLink} from "react-router-dom"
import "./styles.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="logo">
            <NavLink to="/">
              Dr Sotelo
            </NavLink>
          </div>
        </div>
        <div className="middle">Lorem ipsum dolor. Suscipit cum temporibus rerum dolorum!</div>
        <div className="right">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer
