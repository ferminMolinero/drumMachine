import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import { KitPad } from './KitPad';
import { Power } from './Power';
import { Displayer } from './Displayer';
import { Volume } from './Volume';
import { Bank } from './Bank';

const root = document.getElementById("root");
function App(){
  const audioTrackPads = [{
    id: "Heater-1",
    letter: "Q"
  },{
    id: "Heater-2",
    letter: "W"
  },{
    id: "Heater-3",
    letter: "E"
  },{
    id: "Heater-4_1",
    letter: "A"
  },{
    id: "Heater-6",
    letter: "S"
  },{
    id: "Dsc_Oh",
    letter: "D"
  },{
    id: "Kick_n_Hat",
    letter: "Z"
  },{
    id: "RP4_KICK_1",
    letter: "X"
  },{
    id: "Cev_H2",
    letter: "C"
  }]
  const [power, setPower] = useState(true)
  const [display,setDisplay] = useState("None");
  const [volumen, setVolumen] = useState(0.5)
  const powerChange = () => {
    setPower(!power);
  }

  return(<>
  <div className="drumkit-box" id="drum-machine">
    <div className="drumkit-box-pads-container">
      {audioTrackPads.map(({id, letter}, index)=> <KitPad key={index} id={id} letter={letter} power={power} changeDisplay={setDisplay} volumen={volumen}/>)}
    </div>
    <div className="drumkit-box-controllers">
      <Power power={power} setPowerChange={powerChange}/>
      <Displayer nowPlaying={display}/>
      <Volume volumen={volumen} setVolumen={setVolumen}/>
      <Bank/>
    </div>
  </div>
  </>)
}

ReactDOM.render(<App/>,root)