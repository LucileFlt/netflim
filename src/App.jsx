import React from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/Home-Page/HomePage';
import MovieDetail from './pages/Movie-Detail-Page/MovieDetail';
import AccountPage from './pages/Account-Page/Account';
import WatchlistPage from './pages/Watchlist-Page/Watchlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie-detail" component={MovieDetail} />
          <Route path="/account" component={AccountPage} />
          <Route path="/watchlist" component={WatchlistPage} />
          {/* Ajoutez d'autres routes ici */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
