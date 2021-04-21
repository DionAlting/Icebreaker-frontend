import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        margin: 20,
        fontSize: 25,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <NavLink
        activeStyle={{ fontweight: "bold", color: "greenyellow" }}
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontweight: "bold", color: "teal" }}
        exact
        to="/login"
      >
        Login
      </NavLink>

      <NavLink
        activeStyle={{ fontweight: "bold", color: "teal" }}
        exact
        to="/admin/questions"
      >
        Question page
      </NavLink>

      <NavLink
        activeStyle={{ fontweight: "bold", color: "teal" }}
        exact
        to="/admin/questionslist"
      >
        Question List
      </NavLink>
    </div>
  );
}

export default NavBar;
