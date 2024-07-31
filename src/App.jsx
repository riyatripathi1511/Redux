
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid">
        <h2 className="text-center">Introduction to Redux</h2>
        <h3 className=''>Counter Here is: {counter}</h3>
        <button className="btn btn-primary mx-1" onClick={() => dispatch({ type: "increment" })}>Increase</button>
        <button className="btn btn-secondary mx-1" onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
        <button className="btn btn-danger mx-1" onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  )
}

export default App
