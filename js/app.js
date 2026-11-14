import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router, Route } from "react-router-dom";

import Info from "./components/info";
import { Index } from "./components/ui";
import Menu from "./components/menu";

let sizeMap = [2, 5, 10, 18, 30, 45];

// kids.sauravsood.com copy: only the local sandbox and the Info page.
// Uploading, browsing, likes and sign-in are removed. A MemoryRouter keeps
// the address bar fixed, so the app works at any path.
function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Index} />
      <Route
        exact
        path="/info/"
        component={() => (
          <Menu>
            <Info />
          </Menu>
        )}
      />
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("ui"));

export { sizeMap };
