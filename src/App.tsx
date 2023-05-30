import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import {Home} from './components/pages/home/Home';
export const App = () => {
  return (
    <div className="App">
      <CssBaseline>
        <Home />
      </CssBaseline>
    </div>
  );
};
