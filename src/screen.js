import React from 'react'
import Menu from './DISPLAY/menu'
import Games from './DISPLAY/games';
import Music from './DISPLAY/music';
import Setting from './DISPLAY/settings';
import Coverflow from './DISPLAY/coverflow';


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

            {this.props.displaypage === 0 ? <Games /> : ''}
            {this.props.displaypage === 1 ? <Music /> : ''}
            {this.props.displaypage=== 2 ? <Setting /> : ''}
            {this.props.displaypage === 3 ? <Coverflow /> : ''}
        </div>
    );
  }
}

export default Screens;