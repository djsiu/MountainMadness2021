import React, { Component } from 'react'
import './backgroundnoise.css';

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            play: false,
            pause: true

        };

        this.url = "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hillbilly%20Swing.mp3";
        this.audio = new Audio(this.url);

    }

    play = () => {
        this.setState({
            play: true,
            pause: false
        });

        
        console.log('this.audio=' +this.audio);
        this.audio.load();
        const audioPromise = this.audio.play();
        if (audioPromise !== undefined){
            audioPromise
            .then(_ => {})
            .catch(err => {
                console.info(err)
            })

        }
    }

    pause = () => {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }

    render= () => {

        return (
            <div className="soundButtons">
                <button className="play" onClick={this.play}>music: on</button>
                <button className="pause" onClick={this.pause}>music: off</button>
            </div>
        );
    }
}

export default Music

