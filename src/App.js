import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuestionList from "./pages/QuestionList";
import Questions from "./pages/Questions";

function App() {
  return (
    <div className="min-h-screen text-white bg-blue-300">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/admin/questions" component={Questions} />
        <Route path="/admin/questionslist" component={QuestionList} />
      </Switch>
    </div>
  );
}

export default App;
