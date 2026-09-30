function Calculator(){
    let num1=15
    let num2=4

    return (
        <div>
            <p>{num1} + {num2}={num1+num2}</p>
            <p>{num1} - {num2}={num1-num2}</p>
            <p>{num1} X {num2}={num1*num2}</p>
            <p>{num1} / {num2}={num1/num2}</p>
        </div>
    )
}
export default Calculator