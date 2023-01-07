import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


class Music extends React.Component
{
    constructor() {
        super();
        this.state = {
            audioLink: ''
        }
    }
    UNSAFE_componentWillMount() {
        firebase
        .storage()
        .ref()
        // .child('songs/Maan Meri Jaan(PagalWorld.com.se).mp3').getDownloadURL()
        .child('Maan Meri Jaan(PagalWorld.com.se).mp3').getDownloadURL()

        .then((link) => {
            console.log('')
            this.setState({
                audioLink: link
            })
        }) 

        .catch ((error) => {
            console.log('error in getting music froms torage', error);
        })
    }
    
    render()
    {
        return (
            <div className='display-music'>
                <div>
                <h1 style={{color: 'pink'}}> react music</h1>   
                <audio controls src={this.state.audioLink}></audio>
                </div>               
            </div>
        );
    }
};

 export default Music;
