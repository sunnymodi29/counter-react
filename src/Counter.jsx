import { useState } from "react"
const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {setCount(count + 1);}
  const decrement = () => {setCount(count -1);}
  const reset = () => {setCount(0);}

  return (
    <>
      <div className="counterSection">
        <h1 className="count">{count}</h1>
      </div>
      <div className="buttonsContainer">
        <button className="btns" onClick={increment}>+</button>
        <button className="btns" onClick={decrement}>-</button>
        <button className="btns" onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default Counter