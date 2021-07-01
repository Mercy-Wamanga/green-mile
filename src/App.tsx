import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './views/Dashboard/AdminDashboard'
import "./assets/css/app.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={AdminDashboard} />
          {/* <Redirect from="/" to="/admin" /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
