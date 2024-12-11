import './displayer.css'
export function Displayer({nowPlaying}){
    return (<div id="display" className="displayer">{nowPlaying}</div>)
}