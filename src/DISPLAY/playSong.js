 import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


 class PlaySong extends React.Component
 {
    
    
     render()
     {
        const {songIndex, songs}= this.props;
         return (
            <div className='display-music'>
                <h2>{songs[songIndex].name}</h2>
                 <div className='song-image'>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Iik_noADWIOelaB5qJ7dzQfv2yeZ907q_Q&usqp=CAU'}></img>
                {/* <h1 style={{color: 'pink'}}> react music</h1>    */}
                </div>  
                <div style={{marginTop:20}}> <audio controls="seeking" id='audio' src={songs[songIndex].url}></audio> </div>             
            </div>
         );
     }
 };

 export default PlaySong;
