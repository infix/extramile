import React from "react";

import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DriverView } from "./components/DriverView";
import { LandingView } from "./components/Landing";
import { NotFound } from "./components/NotFound";
import { Login } from "./components/Login";
import { MapView } from "./components/Map";
import { Register } from "./components/Register";
import { TrackTrip } from "./components/TrackTrip";
import { client } from "./apolloClient";

import "./App.css";


const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingView}/>
        <Route path="/driver" component={DriverView}/>
        <Route path="/app" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/map" component={MapView}/>
        <Route path="/track" component={TrackTrip}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  </ApolloProvider>
);

export default App;
