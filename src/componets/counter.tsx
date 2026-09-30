import { useState } from "react";
function Counter(){
    const [count, setCount]=useState(0)
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    function handleReset(){
        setCount(0)
    }
    const styleButton={fontSize: '24px', margin: '10px', padding: '10px 24px' }
    const styleCount={fontSize:'80px',fontWeight:"bold",color:count>0 ? "green" :count <0 ? "red" :"black", margin:'20px' }
    const stylePara={ color: 'gray', marginTop: '20px' }

    return(
        <div style={{textAlign:'center',padding:"40px"}}>
            <h2> Counter App</h2><br/>

            <div style={styleCount}>
                {count}<br/>

            </div>

            <div>
            <button onClick={handleDecrement} style={styleButton}> - </button>
            <button onClick={handleReset}style={styleButton}> Reset</button>
            <button onClick={handleIncrement}style={styleButton}> + </button>
            </div>
            <p style={stylePara}>{count === 0 ? "start Clicking!" : `ou are at ${count}`}</p>
        </div>
    )
}
export default Counter