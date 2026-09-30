function Mybutton(){
    function Handleclick(){
        alert("Welcome to raect")
        console.log("asdfghjkl")
    }

    function Handleclick2(){
        alert("Goodbye!")
        console.log("asdfghjkl")
    }
        function Handleclick3(){
        alert(new Date().toDateString())
        console.log("asdfghjkl")
    }
    return(
        <>
        <button onClick={Handleclick2}>Say Goodbye</button> 
        <button onClick={Handleclick}>ay Hello</button>
        <button onClick={Handleclick3}>Show Date</button>
        </>
    )
}
export default Mybutton