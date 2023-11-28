import React, { useState } from 'react';
import DeleteFromList from '../components/DeleteFromList';
import './todos.css'

function ToDos() {
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
        <>
    <div className="ToDo-Container">
        <div className="titles"><h1>To Do List</h1>
        <h3>Add to your list:</h3></div>
        
    <div className="ToDo-input">
        <input id="text" type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
        <button type="button" id="add" onClick={handleAdd}>Add</button>
        </div>
        <div className="ToDo-List">
        {list.map((task, index) => (
            <DeleteFromList
                key={task.item}
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
    </>
    )
    ;
        }

export default ToDos
