import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import {SamplePage} from "./components/sample-page/SamplePage";

export const App = () =>  {

    return (<div className="App">
<CssBaseline>
      <SamplePage />
</CssBaseline>
    </div>
);
}


