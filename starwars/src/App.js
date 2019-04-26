import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      previousUrl: null,
      nextUrl: null,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data);
        this.setState({
          starwarsChars: data.results,
          previousUrl: data.previous,
          nextUrl: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return this.state.starwarsChars.length === 0 ? (
      <div className="App">
        <h1 className="App__Header">React Wars</h1>
        <h1>Loading</h1>
      </div>
    ) : (
      <div className="App">
        <h1 className="App__Header">React Wars</h1>
        <CharacterList chars={this.state.starwarsChars} />
        {this.state.previousUrl && (
          <button
            onClick={() => this.getCharacters(this.state.previousUrl)}
            className="prev"
          >
            &larr; Previous
          </button>
        )}
        {this.state.nextUrl && (
          <button
            onClick={() => this.getCharacters(this.state.nextUrl)}
            className="next"
          >
            Next &rarr;
          </button>
        )}
      </div>
    );
  }
}

export default App;
