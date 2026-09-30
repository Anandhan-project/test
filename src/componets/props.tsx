type NoteCardProps={
    title : string;
    author : string;
    year  : number;

}
function Notecard({title, author,year}: NoteCardProps){
    return(
        <div>
            <h2>The Book</h2>
            <p>Title:{title}</p>
            <p>auther: {author}</p>
            <p>Year :{year}</p>
        </div>
    )
}
export default Notecard