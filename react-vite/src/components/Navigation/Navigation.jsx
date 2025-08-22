import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navbar">
      <li>
        <NavLink to="/homepage">Home</NavLink>
      </li>

      <li>
        <NavLink to="reviewspage">Reviews</NavLink>
      </li>

      <li>
        <NavLink to="/homepage">Build Your Itinerary</NavLink>
      </li>

      <li>
        <ProfileButton />
      </li>
    </div>
  );
}

export default Navigation;
