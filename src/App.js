import "./App.css";
import "./index.css";
import Login from "./components/Login";
import Ragister from "./components/ragister";
// import Dashboard from "./components/Deshboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Family from "./components/Family";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/ragister" component={Ragister} />
          <Route path="/family" component={Family} />
          {/* <Route path="/tasks" component={Tasks} /> */}
        </Switch>
      </div>
    </Router>
  );
}
export default App;
