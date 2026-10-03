import { useState } from "react";
import Button from "./Button";
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <div className="count">{count}</div>
      <div className="buttons">
        <Button text="+" onClick={handleIncrement} className="increase"/>
        <Button text="-" onClick={handleDecrement} className="decrease"/>
        <Button text="Reset" onClick={handleReset} className="reset"/>
      </div>
    </div>
  );
}
export default Counter;