import {useState} from 'react';
function NameInput() {
    const [name, setName] = useState("")

    function handleChange(event:any) {
        setName(event.target.value)
    }
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter your name..."
            />
            <p>{name === "" ? "Okay start!" : `Hello, ${name}!`}</p>
        </div>
    )
}
export default NameInput;