import React from 'react';

class MusicMenu extends React.Component
{
    render()
    {
        const { selectedMusicMenu } = this.props;
        return (
            <React.Fragment>

                {
                    selectedMusicMenu.map((item, index) =>
                    {
                        return (
                            <div className={this.props.selectedOption === index ? 'selected' : ''} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }

            </React.Fragment>
        )
    }
}
export default MusicMenu;