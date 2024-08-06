import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Nav">
      <uL>
        <li>
          <Link to="create">CreateTodo</Link>
        </li>
        <li>
          <Link to="fetch">ShowTodo</Link>
        </li>
      </uL>
    </div>
  );
}

export default Navbar;