export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input 
          type="radio" 
          checked={todo.done} 
          onChange={() => onToggleTodo(todo.id)} 
        />
        <label 
          className={`ms-2 ${todo.done ? 'text-decoration-line-through' : ''}`} 
          onClick={() => onToggleTodo(todo.id)}
          style={{ cursor: 'pointer' }}
        >
          {todo.description}
        </label>
      </div>
      <button 
        className="btn btn-danger" 
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
}