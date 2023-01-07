import React from 'react';
import MusicMenu from './musicMenu';

// const Menu = (props) => {
    // const {options} = props;
    // console.log(props.selectedOption);
    class Menu extends React.Component {
        render() {
    const {selectedOption}=this.props;
    return (
        <div className='screen-menu'>
            <div className='app-logo'>
                <h4>ujjawal ipod</h4>
            </div>
           
           
            {/* <div className={selectedOption===0? 'selected' : ''}>
                <p>Games</p>
            </div>
            <div className={selectedOption===1? 'selected' : ''}>
                <p>Music</p>
            </div>
            <div className={selectedOption===2? 'selected' : ''}>
                <p>settings</p>
            </div>
            <div className={selectedOption===3? 'selected' : ''}> 
                <p>Coverflow</p>
            </div> */}
            <MusicMenu
           selectedMusicMenu ={this.props.optionsInMenu}
            selectedOption={selectedOption}
            />
        </div>
    )
  }
}

export default Menu;