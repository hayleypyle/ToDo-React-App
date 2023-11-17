import './todos.css'


function ToDos(){
return(
<>
<div className="ToDo-Container">
<h1>What To Do?</h1>
<div className="ToDo-input">
    <input type="text" className="userinput" />
    <button>Add to List</button>
    </div>

    <div className="ToDo-List">
    <ul>
        <li>
        <input type="checkbox" />
        Do Laundry
        </li>
        <li>
        <input type="checkbox" />
        Do Laundry
        </li>
        <li>
        <input type="checkbox" />
        Do Laundry
        </li>
    </ul>
    </div>
    </div>
</>
)
}
export default ToDos
