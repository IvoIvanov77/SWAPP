import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import { default as EpisodesPage } from './pages/episodes/episodes-page.container';
import { default as CharactersPage } from './pages/characters/characters-page.component';
import { default as LoginPage } from './pages/login/login-page.container';
import { default as EpisodeDetaislPage } from './pages/episode-details/episode-details-page.container';
import { default as CharacterDetailsPage } from './pages/character-details/character-details-page.container';
import { default as StarshipDetailsPage } from './pages/starship-details/starship-details-page.container';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={EpisodesPage} /> */}
        <Route exact path="/episodes" component={EpisodesPage} />
        <Route exact path="/episodes/:id" component={EpisodeDetaislPage} />
        <Route exact path="/characters" component={CharactersPage} />
        <Route exact path="/characters/:id" component={CharacterDetailsPage} />
        <Route
          exact
          path="/starships/:starshipId"
          component={StarshipDetailsPage}
        />
        <Route exact path="/login" component={LoginPage} />
        <Route
          exact
          path="/"
          render={() =>
            true ? <Redirect to="/episodes" /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
