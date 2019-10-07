import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
// import {default as EpisodesPage} from './pages/episodes/episodes-page.container';
import EpisodesPage from './pages/episodes/episodes-page.component';
import CharacterPage from './pages/characters/characters-page.component';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={EpisodesPage} />
        <Route path="/episodes" component={EpisodesPage} />
        <Route exact path="/characters" component={CharacterPage} />
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
