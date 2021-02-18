import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/pages/Home'

import Education from './components/pages/Education';
import Experiences from './components/pages/Experiences';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <ScrollToTop/>
          <Switch>
            <Route path = '/' exact component = {Home}/>
            <Route path = '/education' exact component = {Education}/>
            <Route path = '/experiences'exact component = {Experiences}/>
            <Route path = '/projects'/>
          </Switch>

      </Router>
    </>
  );
}

export default App;
