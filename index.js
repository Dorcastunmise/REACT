import React from "react";
import AppsRoute from "./Routing/Link";
import { BrowserRouter as Router} from "react-router-dom";
import HocUse from "./HocUse";

const root = ReactDOM.createRoot(
    document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HocUse></HocUse>
    <Router>
      <AppsRoute />
    </Router>
  </React.StrictMode>
);