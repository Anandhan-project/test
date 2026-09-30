import { useEffect,useState } from "react";

function Practise(){
    const [count,setCount]=useState(0)
    const[text,setText]=useState("")
    function handleChange(event:any) {
        setText(event.target.value)
    }

    useEffect(() =>{
        document.title="practise Page"
        console.log("Practise component mounted")
    },[])
    return(
        <>
        <h1>Welcome</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
        <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="enter"
        />
        <h2>{text}</h2>
        <p>{count}</p>

        </>
    )
}
export default Practise