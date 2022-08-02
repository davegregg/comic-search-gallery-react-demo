import { useState } from "react"
import "./Counter.css"

function Counter ({ initialCount }) {  // props
    const [count, setCount] = useState(initialCount)

    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    const reset = () => setCount(initialCount)

    return (
        <div className="Counter">
            <button className="decrement" onClick={decrement}>Decrement</button>
            <strong>{count}</strong>
            <button className="increment" onClick={increment}>Increment</button>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter