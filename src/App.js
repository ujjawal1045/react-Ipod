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
    displaypage:-1,
    music_selected: 0,
    songIndex: -1,
    on_play_music_screen : false
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
                  selected: this.temp_selected,
                  songIndex:-1
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
                  selected: this.temp_selected,
                  songIndex:-1
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
        options: this.state.music_sub_options,
        songIndex:-1,
        songNavigate :0
       
        // selected:0,
         //displaypage:0
      });
      this.temp_selected =0;
      return;
    }

    if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//side menu is not visible
        {
            //if (this.state.options[3] === 'Playlists')
            //{
              console.log("checkinmg",this.state.displaypage);
                if (this.state.displaypage === 0)
                {
              console.log("checkinmg index",this.state.songIndex);

                    if (this.state.songIndex === -1)
                    console.log("checkinmg music selected",this.state.music_selected);
                        this.setState({
                         songIndex:this.state.music_selected,
                         songNavigate:0
                        });
                        this.temp_selected=0;
                   return;
                }
           // }
        }
    this.setState({
      displaypage:this.state.selected,
      songIndex:-1,
      selected:0,
    });
    this.temp_selected=0;
    this.handleMenuButtonClicked();
    

  }

  handleLeftButtonClicked = () =>
    {

      if(this.state.on_play_music_screen)
        {
            if(!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))
            {
                
                if(this.state.songIndex===0)
                {
                    this.setState({
                      songIndex:5
                    });
                    return;
                }
                if(this.state.songIndex!==-1)
                {
                    this.setState({
                      songIndex:this.state.songIndex-1
                    });
                }
            }
        }

        if (this.state.options[0] ==='Songs' )
            this.setState(
                {
                    options: this.state.general_menu,
                    songIndex:-1,
                    selected:0
                }
            );
            if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//side menu is not visible
            {
                if (this.state.options[3] === 'Playlists')
                {
                    if (this.state.displaypage === 0)
                    {
                      
                        if (this.state.current_music_selection === 0)//If I am playing the music at 5th index then I will need to reduce the index to 0 on next right button click.
                            this.setState({
                              music_selected: 5,
                              songIndex:-1
                            });
                        else
                            this.setState({
                              music_selected: this.state.music_selected - 1,
                              songIndex:-1
                            });
                    }
                }
            }
    }


    handleRightButtonClicked = () =>
    {

      if(this.state.on_play_music_screen)
        {
            if(!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))
            {
                
                if(this.state.songIndex===5)
                {
                    this.setState({
                      songIndex:0
                    });
                    return;
                }
                if(this.state.songIndex!==-1)
                {
                    this.setState({
                      songIndex:this.state.songIndex+1
                    });
                    return;
                }
            }
        }
        if (!document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//side menu is not visible
        {
            if (this.state.options[3] === 'Playlists')
            {
                if (this.state.displaypage === 0)
                {
                    if (this.state.current_music_selection === 5)//If I am playing the music at 5th index then I will need to reduce the index to 0 on next right button click.
                        this.setState({
                          music_selected: 0
                        });
                    else
                        this.setState({
                          music_selected: this.state.music_selected + 1
                        });
                }
            }
        }
    }

    handlePlayPAuseButtonClicked = () => {
      if($('#audio')[0].play) {
        $('#audio')[0].pause();
        return;
      } else if($('#audio')[0].pause) {
        $('#audio')[0].play();
        return;
      }
    }

    handlePlayMusicScreen = () => {
      if(this.state.on_play_music_screen) {
        this.setState({
          on_play_music_screen:false
        });
      } else {
        this.setState({
          on_play_music_screen: true
        });
      }
    }


  render() {
    return (
      <div className='App'>
        <Screens
        selectedOption = {this.state.selected} 
        displaypage = {this.state.displaypage}
        selectedMusicMenu = {this.state.options}
        musicSelected = {this.state.music_selected}
        songIndex={this.state.songIndex}
        playMusicScreen = {this.handlePlayMusicScreen}

        />
        <Buttons 
        check={this.checker}
        centerButton={this.centerButton}
        menuButtonClicked={this.handleMenuButtonClicked}
        selectButtonClicked={this.handleSelectButtonClicked}
        leftButtonClicked={this.handleLeftButtonClicked}
        rightButtonClicked={this.handleRightButtonClicked}
        playPauseButtonClicked={this.handlePlayPAuseButtonClicked}
         />
      </div>
    );
  }
}

export default App;
