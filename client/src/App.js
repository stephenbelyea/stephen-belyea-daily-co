import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { callService } from './services';
import { StartCall, JoinCall } from './pages';
import { ROUTES } from "./constants";

export default function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Switch>
          <Route path={`${ROUTES.JOIN_CALL}/:callId`}>
            <JoinCall />
          </Route>
          <Route path={ROUTES.START_CALL}>
            <StartCall service={callService} />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}