import { BrowserRouter, Switch, Route } from "react-router-dom";
import Room from "./pages/Room";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Room} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/SignIn" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
