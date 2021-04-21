import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="min-h-screen text-white bg-blue-300">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
