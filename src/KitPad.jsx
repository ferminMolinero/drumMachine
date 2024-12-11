import { useEffect } from "react";
import "./kitPad.css"

export function KitPad({id, volumen = 0.5, letter, power, changeDisplay}){
    const urlAudio = `https://cdn.freecodecamp.org/testable-projects-fcc/audio/${id}.mp3`
    const handleClick = () =>{
        if(!power) return
        const sound = document.getElementById(letter)
        sound.currentTime = 0;
        sound.volume = volumen;
        changeDisplay(id);
        sound.play();
    }
    const handleKeyDown = (e)=>{
        if(e.key.toLowerCase() == letter.toLowerCase()){
            handleClick();
        }
    }

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown)
        return ()=>window.removeEventListener("keydown", handleKeyDown)
    })

    return (<div className="drum-pad kitPad-container" onClick={handleClick} id={id}><span>{letter}</span><audio className="clip" id={letter} src={urlAudio}></audio></div>)
}