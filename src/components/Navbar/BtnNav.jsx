import { NavLink } from "react-router-dom";

const BtnNav = ({ page }) => {
  return (
    <>
      {
        <div
          className="each-link"
          component={NavLink}
          to={page.link}
        >
          {page.title}
        </div>
      }
    </>
  );
};

export default BtnNav
