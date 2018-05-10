import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Main from '../components/Main'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return(
      <div>
        <Nav />
        <div className="container">
          <Main />
        </div>
      </div>
    )
  }
}

export default App
