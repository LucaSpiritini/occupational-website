import { NavLink } from "react-router-dom";

const BtnNav = ({ page }) => {
  return (
    <>
      {
        <NavLink
          className="each-link"
          to={page.link}
        >
          {page.title}
        </NavLink>
      }
    </>
  );
};

export default BtnNav
