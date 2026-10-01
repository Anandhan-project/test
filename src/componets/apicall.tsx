import { useState,useEffect } from "react";
function UserList(){
    const [users,setuser]=useState([])
    const [loading,setloading]=useState(true)
    const [error,seterror]=useState("")
    useEffect(()=>{
        async function fetchuser() {
            try{
                const respo= await fetch("https://jsonplaceholder.typicode.com/users")
                const dta= await respo.json()
                setuser(dta)
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
            <h2>User List</h2>
            {users.map((user)=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}
export default UserList