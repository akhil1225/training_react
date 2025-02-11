import React, { useEffect, useRef, useState } from 'react'
import myVideo from "./myVideo.mp4";

const RefExample = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();
    // console.log(videoRef);
    
    
    useEffect(()=>{
        eleRef.current.style.color = "magenta";
        eleRef.current.innerText = "MyReactRef";
    })

    let playOrPause =() =>{
        if(play === true){
            videoRef.current.play();
            console.log(videoRef);
            setPlay(false);
        }else{
            videoRef.current.pause();
            setPlay(true);
            console.log(videoRef);
        }
    }
    
  return (
    <div>
        <h1 ref={eleRef}>RefExample</h1>
        <video src={myVideo} ref={videoRef} onClick={playOrPause} controls loop></video>
    </div>
  )
}

export default RefExample