function StudentUllist(){
    const students=["BCA","BBA","BSC"]
    return(
        <div>
            <ol>
                {students.map((stu)=>

                    <li>{stu}</li>
)}
            </ol>
        </div>
    )
}
export default StudentUllist