import React, { Component } from 'react';
import Videofilm from './imports/cook.mp4'
import Buttons from './buttons'


class header extends Component {
  componentDidMount() {
    console.log('ezfq' ,this.refs)
    this.refs.vidRef.playbackRate = 0.7
  }

 
  playVideo=()=>{
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  }

  pauseVideo=()=>{
    // Pause as well
    //const vid=document.querySelector("video");
    this.refs.vidRef.pause()
    //vid.pause();
    console.log('ezfq' ,this.refs)
  }

  updateSearch=()=>{
   
  }

  




  render() {
    
    return (
      <div className="contentwrapper">
      <div className="content">
      <div className="content">        <div className="titlewrapper"><h1 className="mytitle">My React Cookbook</h1></div>

        <div className="inputwrapper"> 
               
          <input className="search-bar" type="text" onChange={(e)=>this.props.updatequery(e)} />
          
          <button  className="search-button" type="submit">Search</button>
        </div>
        
        <Buttons playVideo={this.playVideo} pauseVideo={this.pauseVideo} />

        </div>
        <video className="video" autoPlay muted ref="vidRef" loop src={Videofilm} type="video/mp4"></video>

        </div>
        </div>

         
    );
  }
}

export default header;