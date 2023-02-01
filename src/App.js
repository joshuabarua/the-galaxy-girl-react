import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/index";
import Resume from "./pages/resume/index";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" exact component={Resume} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      <Footer />
      </Router>
    </>
  );
}

export default App;
