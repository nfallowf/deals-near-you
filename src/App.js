import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResults from './SearchResults/SearchResults'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*This is the header section, perhaps search here?*/}
      </header>
      <section className="Main-Content">
        {/*This is where search results will be diplayed*/}
        <SearchResults/>
      </section>
    </div>
  );
}

export default App;
