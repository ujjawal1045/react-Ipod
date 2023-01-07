import React from 'react'
import Menu from './DISPLAY/menu'
import Games from './DISPLAY/games';
import Music from './DISPLAY/music';
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

             {this.props.displaypage === 0&&this.props.selectedMusicMenu.length===4 ? <Games /> : ''}
             
            {this.props.displaypage === 2&&this.props.selectedMusicMenu.length===4 ? <Setting /> : ''}
            {this.props.displaypage === 3&&this.props.selectedMusicMenu.length===4 ? <Coverflow /> : ''}
            {/* {this.props.displaypage === 3&&this.props.selectedMusicMenu.length===3? <PlayList /> : ''} */}
            {this.props.displaypage === 0&&this.props.selectedMusicMenu.length===3 ? <Songs /> : ''}
            {this.props.displaypage === 1&&this.props.selectedMusicMenu.length===3 ? <Albums /> : ''} 
            {this.props.displaypage === 2&&this.props.selectedMusicMenu.length===3 ? <Artists /> : ''}
           
    </div>
    );
  }
}

export default Screens;