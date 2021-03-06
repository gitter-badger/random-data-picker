import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.scss';
import random from 'lodash/random';

//Components
import SearchComponent from '../components/searchComponent/searchComponent';
import ListOfParticipants from '../components/listOfParticipants/listOfParticipants';

//Constants
import { listOfParticipants } from '../constants/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueSeleted: null
    };

    this.onClickRouletteButton = this.onClickRouletteButton.bind(this);
  }

  onClickRouletteButton() {
    const valueRandom = random(0, listOfParticipants.length - 1);
    this.setState({
      valueSeleted: listOfParticipants[valueRandom].name
    });
  }

  render() {
    const { valueSeleted } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h1 className="app__title">Welcome to loans roulette</h1>
        </header>
        <div className="row app__container-cols" >
          <div className="col-md-9">
            <SearchComponent onHandleModifyValue={this.onClickRouletteButton} />
            <ListOfParticipants listParticipants={listOfParticipants} valueSeleted={valueSeleted} />
          </div>
          <div className="col-md-3">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
