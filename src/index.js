import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home-Page/Home-Page';
import AccountPage from './pages/Account-Page/Account';
import MovieDetailPage from './pages/Movie-Detail-page/Movie-Detail-Page';
import Watchlist from './pages/Watchlist-Page/Watchlist';
import './style.module.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/movie-detail-page/:id" element={<MovieDetailPage />} />
              <Route path="/watchlist" element={<Watchlist />} />
          </Route>  
        </Routes>
      </BrowserRouter>
  </StrictMode>
);