import React from 'react'

const Buttons = (props) => {
    return (
        <div className='buttons-container'>
            <button className='center-circle' onClick={props.selectButtonClicked}>
                <h2>select</h2>
            </button>

            <button className="menu-button" onClick={props.menuButtonClicked}>
                <h5>menu</h5>
            </button>

            <button className='previous-button' onClick={props.leftButtonClicked}>
            <i className="fas fa-backward"></i>
            </button>

            <button className='next-button' onClick={props.rightButtonClicked}>
            <i className="fas fa-forward"></i>
            </button>

            <button className='play-pause' onClick={props.playPauseButtonClicked}>
            <i className="fas fa-play"></i><i className="fas fa-pause"></i>
            </button>
        </div>
    );
}

export default Buttons;