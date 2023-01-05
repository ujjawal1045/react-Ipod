import react from 'react'
import Menu from './DISPLAY/menu';
import Coverflow from './DISPLAY/coverflow';
import Games from './DISPLAY/games';
import Music from './DISPLAY/music';
import Setting from './DISPLAY/settings';


const Screens = (props) => {
    return (
        <div className='screen-container'>
            <Menu />
        </div>
    );
}

export default Screens;