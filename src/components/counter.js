import React, { useState } from 'react'

const Counter = () => {
    const [count, setCounter] = useState(0)
    const countUp = () => {
        setCounter(prevState => prevState + 1)
    }
    const countDown = () => {
        setCounter(prevState => prevState - 1)
    }
    return (
        <div>
            <p>現在のカウント{count}</p>
            <button onClick={countUp}>増やす</button>
            <button onClick={countDown}>減らす</button>
        </div>
    )
}

export default Counter
