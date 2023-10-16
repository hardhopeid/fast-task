import './TodoItem.css';
import { BsCheck2Circle } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";


function TodoItem(props) {
  return (
    <li className="TodoItem">
    
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}
      >
      < BsCheck2Circle />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
    
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        <BsFillTrash3Fill />
      </span>
    </li>
  );
}

export { TodoItem };