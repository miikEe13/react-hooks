const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {
    if ( action.type === '[TODO] add todo' ){
        return [ ...state, action.payload ]; // Agrega el nuevo todo
    }
    return state; // Retorna el estado actual si la acción no coincide
}

let todos = todoReducer(); // Inicializa el estado

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo, // Definimos el nuevo todo para añadir
}

todos = todoReducer( todos, addTodoAction ); // Actualiza el estado con la nueva tarea
console.log({ initialState, todos }); // Comparamos ambos

console.log({state: todos}) // Muestra el estado actualizado
