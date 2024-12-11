export function Volume({volumen, setVolumen}){
    const handleChange = (e)=>{
        setVolumen(e.target.value/10)
    }
    return (<input type="range" min="0" max="10" value={volumen*10} onChange={handleChange}/>)
}