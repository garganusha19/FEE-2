import { useState } from 'react'
import './Counter.css'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h1>Counter App</h1>

      <div className="count">
        {count}
      </div>

      <div className="buttons">

        <button onClick={() => setCount(count - 1)}>
          -
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setCount(count + 1)}>
          +
        </button>

      </div>
    </div>
  )
}

export default Counter