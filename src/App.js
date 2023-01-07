import React from 'react';
import logo from './logo.svg';
import './App.css';
import Buttons from './button.js';
import Screens from './screen.js';
import ZingTouch from 'zingtouch';
import 'lodash';
import $  from 'jquery';

class App extends React.Component {
  constructor() {
    super();
    this.temp_change_in_angle=0;
    this.temp_selected=0;
    this.state = {
      options: ['Games',
                'Music',
                'Settings',
                'Cover Flow'
    ],
    music_sub_options: [
      'Songs',
      'Albums',
      'Artists',
       'Playlists'
    ],
    general_menu :  ['Games',
    'Music',
    'Settings',
    'Cover Flow'
],
    change_in_angle : 0,
    selected: 0,
    displaypage:-1
    }
  }
  componentDidMount () {
    //creatng region to listen for event
    var buttonElement = ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
    buttonElement.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) => {
      let dist = event.detail.distanceFromLast;
      this.temp_change_in_angle += dist;

      if(this.temp_change_in_angle > 60) {
        console.log(this.state.options[this.state.selected]);
                this.temp_selected++;
                
                this.temp_selected = this.temp_selected % 4;
                this.setState({
                  selected: this.temp_selected
                });
                this.temp_change_in_angle = 0;
      }
      else if(this.temp_change_in_angle<-60) {
        console.log(this.state.options[this.state.selected]);
                this.temp_selected--;
                
                if (this.temp_selected === -1)
                    this.temp_selected = 3;
                this.temp_selected = this.temp_selected %4;
                this.setState({
                  selected: this.temp_selected
                });
                this.temp_change_in_angle = 0;
      }
    });

    // buttonElement.bind(document.getElementsByClassName('center-circle')[0], 'tap', (event) => {
    //   event.stopPropogation();
    // });
  }

  handleMenuButtonClicked = () => {

    // if(this.state.options === this.state.music_sub_options) {
    //   this.setState({
    //     options:this.state.general_menu
    //   });
    //   return;
    // }
    let menuList = document.getElementsByClassName('screen-menu')[0].classList;
    
    console.log($('.screen-menu'));

    if(menuList.contains('width-50')) 
    {
      $('.screen-menu').removeClass('width-50');
    } 
    else
     {
      $('.screen-menu').addClass('width-50');

    }
  }

  handleSelectButtonClicked = () => {
    if(this.state.selected===1 && this.state.options[0]==='Games' && this.state.options.length === 4 ) {
      this.setState({
        options: this.state.music_sub_options
      });
      return;
    }
    this.setState({
      displaypage:this.state.selected
    });
    this.handleMenuButtonClicked();
    

  }

  handleLeftButtonClicked = () =>
    {
        if (this.state.options[0] ==='Songs' )
            this.setState(
                {
                    options: this.state.general_menu
                }
            );
        return;
    }


  render() {
    return (
      <div className='App'>
        <Screens
        selectedOption = {this.state.selected} 
        displaypage = {this.state.displaypage}
        selectedMusicMenu = {this.state.options}

        />
        <Buttons 
        check={this.checker}
        centerButton={this.centerButton}
        menuButtonClicked={this.handleMenuButtonClicked}
        selectButtonClicked={this.handleSelectButtonClicked}
        leftButtonClicked={this.handleLeftButtonClicked}
         />
      </div>
    );
  }
}

export default App;
