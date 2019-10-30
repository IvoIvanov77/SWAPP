import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/header/header.component';
import { default as EpisodesPage } from './episodes/episodes-page.container';
import { default as CharactersPage } from './characters/characters-page.component';
import { default as EpisodeDetaislPage } from './episode-details/episode-details-page.container';
import { default as CharacterDetailsPage } from './character-details/character-details-page.container';
import { default as StarshipDetailsPage } from './starship-details/starship-details-page.container';
// import { default as AllStarships } from './components/all-starships/all-starships.container';

function Pages() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <Route exact path="/allstars" component={AllStarships} /> */}
        <Route exact path="/episodes" component={EpisodesPage} />
        <Route exact path="/episodes/:id" component={EpisodeDetaislPage} />
        <Route exact path="/characters" component={CharactersPage} />
        <Route exact path="/characters/:id" component={CharacterDetailsPage} />
        <Route
          exact
          path="/starships/:starshipId"
          component={StarshipDetailsPage}
        />
      </Switch>
    </div>
  );
}

export default Pages;
