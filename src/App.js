import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import { default as EpisodesPage } from './pages/episodes/episodes-page.container';
import { default as CharacterPage } from './pages/characters/characters-page.container';
import { default as LoginPage } from './pages/login/login-page.container';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={EpisodesPage} />
        <Route exact path="/episodes" component={EpisodesPage} />
        <Route exact path="/characters" component={CharacterPage} />
        <Route exact path="/login" component={LoginPage} />
        {/* <Route
          exact
          path='/signin'
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SignInAndSignUpPage />
              )
          }
        /> */}
      </Switch>
    </div>
  );
}

export default App;
