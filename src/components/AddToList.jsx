
function AddToList() {
    const [userInput, setUserInput] = useState('');
    const [list, setList] = useState([

    ]);

    const handleAdd=()=>{
        if (userInput.trim() !== '') {
        setList([...list, { item: userInput }]);
        setUserInput('');
    }
}

    const handleReset=()=>{
        setList([]);
    
    }


    const deleteTask = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    };

    return (
    <div className="notepad">
        <h1>To Do App</h1>
        <h3>Add to my list:</h3>
    <div className="addtasks">
        <input id="text" type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
        <button type="button" id="add" onClick={handleAdd}>Add</button>
        </div>
        <div className="list-container">
        {list.map((task, index) => (
            <AddToList
                key={index}
                id={index}
                name={task.item}
                completed={false}
                item={task.item}
                deleteTask = {deleteTask}
                />           

        ))}
    
        

    </div>
    <div className="reset-container"> 
        <button type="button" id="reset" onClick={handleReset}>Reset</button></div>

    </div>
    )
    ;
        }


export default AddToList
