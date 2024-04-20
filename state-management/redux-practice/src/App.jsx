import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/features/counter/counterSlice'

export default function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className=''>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
        >
          by value
        </button>
        {/* <button
          onClick={() => dispatch(() => {
            console.log("some data from api")
          })}
        >
          by value
        </button> */}
      </div>
    </div>
  )
}