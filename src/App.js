import React from 'react';
import {
  Grid,
} from '@material-ui/core/';
import SearchBar from "./Components/SearchBar/SearchBar";
import ReposSection from "./Components/ReposSection/ReposSection";
import OrgsSection from "./Components/OrgsSection/OrgsSection";
import './App.css';

function App() {
  return (
    <Grid container spacing={2} justify="space-around" className="App">
      <Grid item xs={12} zeroMinWidth>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <SearchBar/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ReposSection/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <OrgsSection/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;