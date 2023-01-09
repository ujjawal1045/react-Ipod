import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import PlaySong from './playSong';
// class Songs extends React.Component
// {
//     render()
//     {
//         return (
//             <div>
//                 <h1 style={{color: 'pink'}}> Songssss</h1>
//             </div>
//         );

//     }
// }
class Songs extends React.Component
{
    constructor() {
        super();
        this.temp_song_array=[]
        this.state = {
            songs_list:[],
            
        }
    }
    componentDidMount() {
        firebase
        .storage()
        .ref()
        // .child('songs/Maan Meri Jaan(PagalWorld.com.se).mp3').getDownloadURL()
        .child('songs').listAll()

        .then((list) => {
           list.items.forEach(async (ref) => {
            await ref.getDownloadURL()
            .then((link) => {
                this.temp_song_array.push({name:ref.name,url:link});
                if(this.temp_song_array.length === 6) {
                    this.setState({
                        songs_list: this.temp_song_array,
                       
                    });
                }
                
            })
            .catch((error) => {
                console.log('error in fetching all song list from db', error);
               })

           })
           
        }) 
        .catch((error) => {
            if(error)
            console.log('error in fetching list',error)
        })

    }
    
    render()
    {
        console.log('checking song index in song fle',this.props.songIndex)
        
        if(this.props.songIndex !== -1) {
            return <PlaySong
            songIndex={this.props.songIndex}
            songs={this.state.songs_list}
            playMusicScreen={this.props.playMusicScreen} />;
        }
        return (
            
            <div className='song-list'>
                <h1 className='song-heading'>All Songs</h1>
                <div className='all-songs-list'>
                {/* <h1 style={{color: 'pink'}}> react music</h1>   
                <audio controls src={this.state.audioLink}></audio> */}
                {this.state.songs_list.map((item,index) => {
                    console.log(item);
                    console.log(item.name);
                    return (
                        <div className={this.props.currentMusicSelected==index ? 'selected-song' : ''} key={index}> {item.name} </div>
                        
                    )
                })}

                </div>               
            </div>
        );
    }
};

export default Songs;