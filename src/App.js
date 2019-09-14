import React from 'react';
import SearchBar from "./Components/SearchBar/SearchBar";
import ReposSection from "./Components/ReposSection/ReposSection";
import OrgsSection from "./Components/OrgsSection/OrgsSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <div className="repos-organisation-sections">
        <ReposSection/>
        <OrgsSection/>
      </div>
    </div>
  );
}

export default App;