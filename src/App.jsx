// src/App.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import React from 'react';
import style from "./style.module.css";

export function App() {

    return <div className="container-fluide">
    <Header />
    <div className={style.outlet_container}>
      <Outlet />
    </div>
    </div>
};

export default App;