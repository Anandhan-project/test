import { useState } from "react";

function ScoreTrucker(){
    const [player1, setPlayer1]=useState(0)
    const [player2, setPlayer2]=useState(0)
    
    function handleIncrement1(){
        setPlayer1(player1+1)

    }
        function handleIncrement2(){
        setPlayer2(player2+1)

    }

        function handleReset(){
        setPlayer1(0)
        setPlayer2(0)
    }
    const style1={display:"flex",justifyContent:"center",gap:"60px"}
    const style2={display:"flex",justifyContent:"center",marginRight:"360px",marginLeft:"360px",}
    const style3={display:"flex",justifyContent:"center",gap:"30px"}
    const style4={}

    return(
        <div style={{textAlign:'center',padding:"40px"}}>
            <h2> Score Tracker </h2><br/>

            <div >
                <div style={style1}>
                    <p>Player one </p>
                    <p>Player two </p>
                </div>
                <div style={style2}>                
                    {player1}<hr/>
                    {player2}
                </div>

            </div>

            <div style={style3}>
                <button onClick={handleIncrement1} > + </button>
                <button onClick={handleReset}> Reset</button>
                <button onClick={handleIncrement2}> + </button>
            </div>
            <p style={style4}>{player1 === player2 ? "its a tie" : player1 < player2 ? "player 2 has hieghest score" : "player 1 has hieghest score"}</p>
        </div>
        )
}
export default ScoreTrucker