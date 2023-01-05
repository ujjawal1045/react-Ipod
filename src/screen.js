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
            selectedOption = {this.props.selectedOption}  />
            {this.props.showPage === 0 ? <Games /> : ''}
            {this.props.showPage === 1 ? <Music /> : ''}
            {this.props.showPage === 2 ? <Setting /> : ''}
            {this.props.showPage === 3 ? <Coverflow /> : ''}
        </div>
    );
  }
}

export default Screens;