import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Articlelist from "./pages/articlelist";
import Navigation from "./pages/navig";
import Article from "./pages/article";

function App() {
  return (

    <Router>
     <Navigation/>
      <div className="App">

        <Route path="/" component={Homepage} exact/>
        <Route path="/about" component={Aboutpage} exact/>
        <Route path="/blog" component={Articlelist} exact/>
        <Route path="/blog/:name" component={Article} />

      </div>
    </Router>
  );
}

export default App;
