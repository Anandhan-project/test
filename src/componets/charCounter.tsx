import {useState} from 'react';
function CharCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    
    function handleChange(event:any) {
        setName(event.target.value)
        setCount(event.target.value.length)
    }
    return(
        <div>
        <h1>Character Counter</h1>
        <textarea 
        value={name}
        onChange={handleChange}
        placeholder="Enter the data"
        style={{
            width:"100px",
            height:"50px",
            color : count> 100 ? 'Red' : 'black'
        }}
        />
        <p>The remaining characters: {Math.max(0, 100 - count)}</p>
        </div>

    )
}
export default CharCounter