import react from 'react'
import Menu from './DISPLAY/menu';
import Coverflow from './DISPLAY/coverflow';
import Games from './DISPLAY/games';
import Music from './DISPLAY/music';
import Setting from './DISPLAY/settings';


const Screens = (props) => {
    const {options} = props;
    return (
        <div className='screen-container'>
        
            <Menu
            selectedOption = {props.selectedOption}  />
        </div>
    );
}

export default Screens;