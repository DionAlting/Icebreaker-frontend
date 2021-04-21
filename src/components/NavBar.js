import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { user } from "../redux/user/selectors";

function NavBar() {
  const { isHost } = useSelector(user);
  return isHost ? (
    <>
      <div className="flex flex-row items-center justify-around py-5 text-xl font-extrabold">
        <NavLink
          activeClassName="font-extrabold bg-blue-500 bg-opacity-50 rounded-lg px-2 py-2"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="font-extrabold bg-blue-500 bg-opacity-50 rounded-lg px-2 py-2"
          exact
          to="/login"
        >
          Login
        </NavLink>

        <NavLink
          activeClassName="font-extrabold bg-blue-500 bg-opacity-50 rounded-lg px-2 py-2"
          exact
          to="/admin/questions"
        >
          Question page
        </NavLink>

        <NavLink
          activeClassName="font-extrabold bg-blue-500 bg-opacity-50 rounded-lg px-2 py-2"
          exact
          to="/admin/questionslist"
        >
          Question List
        </NavLink>
      </div>
    </>
  ) : null;
}

export default NavBar;
