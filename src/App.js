import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddVessel } from "./components/AddVessel";
import { EditVessel } from "./components/EditVessel";
import { GlobalProvider } from "./context/GlobalState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddVessel} />
            <Route path='/edit/:id' component={EditVessel} />
            <Home />
            <AddVessel />
            <EditVessel />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
