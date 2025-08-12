import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './store'
import { TodoApp } from './TodoApp'

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </ChakraProvider>
  )
}

export default App
