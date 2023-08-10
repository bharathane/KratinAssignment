import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FoodDiet from "./components/FoodDiet";
import Profile from "./components/ProfileRoute";
import Doctor from "./components/DoctorsRoute";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browser" component={FoodDiet} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/doctor" component={Doctor} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
