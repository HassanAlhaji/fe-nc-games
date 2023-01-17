import { Link } from "react-router-dom";
import Category from "./Category";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Category />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
