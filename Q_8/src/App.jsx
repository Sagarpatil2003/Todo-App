import { Provider } from 'react-redux'
import { Counter } from './Counter'
import { store } from './CounterReducer'
import '../src/App.css'
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
