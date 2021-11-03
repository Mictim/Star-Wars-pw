import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./views/Details/Details";

import useSessionstorage from './hooks/useLocalstorage';

function App () {
  const [selectedStarship, setSelectedStarship] = useSessionstorage('starship', '')
  const [idStarship, setIdStarship] = useSessionstorage('id', '')

  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/starships">
            <Starships changeStarship={setSelectedStarship} changeId={setIdStarship} />
          </Route>
          <Route path="/starships/:id">
            <Details info={selectedStarship} id={idStarship} />
          </Route>
        </Switch>
      </ Router>
    </div>
  );
}

export default App;
