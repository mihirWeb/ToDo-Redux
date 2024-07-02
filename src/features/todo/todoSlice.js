import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { // initial state of our slice. slice is nothing but a collection of state and it's methods(reducer) to change state
    todos: [{id: 1, text: "Moshi Moshi", completed: false}] // array bcz we can have multiple todo    
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // to define initialState of our todo
    reducers: { // a set of properties associated with corresponding function to modify state
        addTodo: (state, action) => { // we always have access to both these arguments: state gives you the current value or status of our state
                                        // action is an object that contain payload info to modify state eg the id of cart icon when we click on add to cart
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            todo.completed = !todo.completed;
        }
    }
})

export const {addTodo, removeTodo, completeTodo} = todoSlice.actions; // we also have to export them explicitly bcz we have to use the actions in our components

export default todoSlice.reducer // we have to give these to the store bcz it keeps the track of all reducers of a particular slice
//  every slice has to follow those above export logic