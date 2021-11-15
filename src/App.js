import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

import Home from './views/Home/Home';
import Starships from './views/Starships/Starships'
import Details from "./views/Details/Details";

import ScrollToTop from "./utils/ScrollToTop";


function App () {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [logged, setLogged] = useState(false)

  return (
    <div className="App">
      {loginModal && <Modal closeModal={setLoginModal} openModal={setRegisterModal} title={'sign in'} setLogged={setLogged} />}
      {registerModal && <Modal closeModal={setRegisterModal} openModal={setLoginModal} title={'create your account'} />}
      <Header openLoginModal={setLoginModal} openRegisterModal={setRegisterModal} logged={logged} setLogged={setLogged} />
      <Router>
        <Nav />
        <main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/starships">
              <Starships />
            </Route>
            <Route path="/starships/:id">
              <Details />
            </Route>
          </Switch>
        </main>
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
