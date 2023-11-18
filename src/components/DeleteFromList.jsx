import './Delete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


function DeleteFromList({id, name, completed, item, deleteTask}) {
    
    const handleDelete = () => {
        deleteTask(id)
    
        }
        return (  
        
            
        <div className="listclass">
            <input type="checkbox" id={name} defaultChecked={completed} value={item}/>
            <div className="list-input">
                <label htmlFor="check">{name}</label>
                <span className="delete-task" onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></span>
        </div>
        </div>
    
    )
    }

    export default DeleteFromList
