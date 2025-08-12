import { createStore } from 'redux'

const initialState = { count: 0 }

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

export function increment() {
  return { type: INCREMENT }
}
export function decrement() {
  return { type: DECREMENT }
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export const store = createStore(counterReducer)
