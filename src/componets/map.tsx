function StudentList(){
    const students=[
        {id:1 ,name:"Arjun", course:"CS"},
        {id:1 ,name:"Priya", course:"DS"},
        {id:1 ,name:"Menon", course:"CyberSecurity"}
    ]
    return (
        <div>
            {students.map((student)=>
            <div key={student.id}>
                <h3>{student.name}</h3>
                <p>{student.course}</p>


            </div>)}
        </div>
    )
}
export default StudentList