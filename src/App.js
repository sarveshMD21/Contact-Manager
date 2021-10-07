import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Home from './Components/Home';
import View from './Components/View';
import Update from './Components/Update';
import Delete from './Components/Delete';
import NewContact from './Components/NewContact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {

  return (
    <Router>
      <Switch>
         <Route  exact path="/"><Home/></Route>
         <Route path="/new"><NewContact/></Route>
         <Route path="/:id/update"><Update/></Route>
         <Route path="/:id/view"><View/></Route>
         <Route path="/:id/delete"><Delete/></Route>
      </Switch>
    </Router>
  );
}

export default App;
