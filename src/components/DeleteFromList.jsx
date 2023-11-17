import './Delete.css'

function DeleteFromList({id, name, completed, item, deleteTask}) {

    const handleDelete = () => {
        deleteTask(id)
    
        }
        return (  
        <div className="listclass">
        <input type="checkbox" id={id} defaultChecked={completed} value={item}/>
        <div className="list-input">
        <label htmlFor="check">{name}</label>
        <span className="delete-task" onClick={handleDelete}>X</span>
        </div>
        </div>
    
    )
    }

    export default DeleteFromList
