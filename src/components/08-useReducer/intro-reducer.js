
const initialState = [{
    id: 1,
    todo: 'Buy Meat',
    done: false,
}];

const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'add') {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Buy Avocado',
    done: false,
}

const addTodoaction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, addTodoaction );

console.log(todos);
