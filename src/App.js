import react from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './button.js';
import Screens from './screen.js';
import React from 'react';
import ZingTouch from 'zingtouch'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ['Games',
                'Music',
                'Settings',
                'Cover Flow'
    ],
    change_in_angle : 0,
    selected: 0
    }
  }
  componentDidMount () {
    //creatng region to listen for event
    var buttonElement = ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
    buttonElement.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) => {
      let dist = event.detail.distanceFromLast;
      this.state.change_in_angle += dist;

      if(this.state.change_in_angle > 60) {
        console.log(this.state.options[this.state.selected]);
                this.state.selected++;
                this.state.change_in_angle = 0;
                this.state.selected = this.state.selected % 4
      }
      else if(this.state.change_in_angle<-60) {
        console.log(this.state.options[this.state.selected]);
                this.state.selected--;
                this.state.change_in_angle = 0;
                if (this.state.selected === -1)
                    this.state.selected = 3;
                this.state.selected = this.state.selected % 4;
      }
    });

    buttonElement.bind(document.getElementsByClassName('center-circle')[0], 'tap', (event) => {
      event.stopPropogation();
    });
  }
  render() {
    return (
      <div className='App'>
        <Screens />
        <Buttons 
        check={this.checker}
        centerButton={this.centerButton}
         />
      </div>
    );
  }
}

export default App;
