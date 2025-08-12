import { useDispatch, useSelector} from'react-redux'
import { increment,decrement } from './CounterReducer'

export function Counter(){
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()

    return(
        <>
           <div>
             <h2>{count}</h2>
             <button onClick={()=> dispatch(increment())}>Increment</button>
             <button onClick={()=>{ dispatch(decrement())}}>Decreemnt</button>
           </div>
        </>
    )
}