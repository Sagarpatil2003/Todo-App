import { createStore } from 'redux'

// Initial state
const initialState = {
  todos: []
}

// Action types
const ADD_TODO = 'ADD_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const DELETE_TODO = 'DELETE_TODO'

// Action creators
export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: { title }
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id }
})

// Reducer
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload.title, status: false }
        ]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, status: !todo.status }
            : todo
        )
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }
    default:
      return state
  }
}

// Store
export const store = createStore(todoReducer)
