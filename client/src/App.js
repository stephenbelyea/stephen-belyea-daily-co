import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { callService } from './services';
import { StartCall, JoinCall, ListCalls, CallMetrics } from './pages';
import { ROUTES } from "./constants";
import Navigation from "./components/Navigation/Navigation";

export default function App(props) {
  console.log(props)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Switch>
            <Route path={`${ROUTES.DASH_CALL_METRICS}/:callId`}>
              <CallMetrics service={callService} />
            </Route>
            <Route path={ROUTES.DASH_CALLS} exact>
              <ListCalls service={callService} />
            </Route>
            <Route path={`${ROUTES.JOIN_CALL}/:callId`}>
              <JoinCall />
            </Route>
            <Route path={ROUTES.START_CALL} exact>
              <StartCall service={callService} />
            </Route>
          </Switch>
        </main>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}