import { useState,useEffect } from "react";
import  "../componets/style.css/style.css"
function UserList(){
    const [users,setuser]=useState([])
    const [loading,setloading]=useState(true)
    const [error,seterror]=useState("")
    useEffect(()=>{
        async function fetchuser() {
            try{
                const respo= await fetch("https://jsonplaceholder.typicode.com/posts ")
                const dta= await respo.json()
                setuser(dta.slice(0,8))
                //setting initial and ending
                //syntax - varialbe.slice(init,end)
                setloading(false)
            }
            catch (err)
            {
                seterror("failed")
                setloading(false)
            }
            
        }
        fetchuser()
    },[])
        if (loading){
        return <p>loading.....</p>
    }
    if (error){
        return<p>{error}</p>
    }
    return(
        <div>
            <h2 >User List</h2>
            {users.map((user)=>(
                <div key={user.id}  className="card">
                    <h2 className="h2">{user.title}</h2>
                    <p>{user.body}</p>

                </div>
            ))}
        </div>
    )

}
export default UserList