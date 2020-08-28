import React from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchResults from './SearchResults/SearchResults'

class App extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="App">
              <header className="App-header">

              </header>

              <section className="Main-Content">
                {/*This is where search results will be diplayed*/}
                <div style={{width: "80%", marginLeft: "auto", marginRight: "auto"}}>
                    <SearchResults/>
                </div>
              </section>

            </div>
          );
    }
}

export default App;
