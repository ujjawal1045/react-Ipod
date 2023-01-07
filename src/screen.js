import React from 'react'
import Menu from './DISPLAY/menu'
import Games from './DISPLAY/games';
import PlaySong from './DISPLAY/playSong';
import Setting from './DISPLAY/settings';
import Coverflow from './DISPLAY/coverflow';
import Albums from './DISPLAY/album';
import Artists from './DISPLAY/artist';
import Songs from './DISPLAY/songs';
import PlayList from './DISPLAY/playlist';

// const Screens = (props) => {
//     const {options} = props;
class Screens extends React.Component
{
    render()
    {
    return (
        <div className='screen-container'>
        
            <Menu
            selectedOption = {this.props.selectedOption}
            optionsInMenu = {this.props.selectedMusicMenu}

            />
{/*  
             {this.props.displaypage === 0 ? <Games /> : ''}
            {this.props.displaypage === 1 ? <Music /> : ''}
            {this.props.displaypage=== 2 ? <Setting /> : ''}
            {this.props.displaypage === 3 ? <Coverflow /> : ''}  */}

             

             {this.props.displaypage === 0&&this.props.selectedMusicMenu[0]==='Games' ? <Games /> : ''}
             {this.props.displaypage === 2&&this.props.selectedMusicMenu[2]==='Settings' ? <Setting /> : ''}
             {this.props.displaypage === 3&&this.props.selectedMusicMenu[3]==='Cover Flow' ? <Coverflow /> : ''}
             {this.props.displaypage === 0&&this.props.selectedMusicMenu[0]==='Songs' ? <Songs
              currentMusicSelected={this.props.musicSelected}
              songIndex={this.props.songIndex} /> : ''}
             {this.props.displaypage === 1&&this.props.selectedMusicMenu[1]==='Albums' ? <Albums /> : ''} 
             {this.props.displaypage === 2&&this.props.selectedMusicMenu[2]==='Artists' ? <Artists /> : ''}
             {this.props.displaypage === 3&&this.props.selectedMusicMenu[3]==='Playlists'? <PlayList /> : ''} 
             
    </div>
    );
  }
}

export default Screens;