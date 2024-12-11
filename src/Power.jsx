import './power.css'

export function Power({power, setPowerChange}){
    const className = `powerBox ${power?"active":"inactive"}`
    return (<div className={className} onClick={setPowerChange}></div>)
}