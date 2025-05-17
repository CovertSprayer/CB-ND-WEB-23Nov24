import { useState } from "react";

const NewCounter = () => {

  // let count = 1;
  const [count, setCount] = useState(1);

  const increment = () => {
    // count++;
    // console.log(count)
    setCount(count+1);
  }

  const decrement = () => {
    // count--;
    // console.log(count)
    setCount(count-1);
  }

  return (
    <>
      <button onClick={() => { decrement() }}>-1</button>

      <div style={styles.counter}>{count}</div>

      <button onClick={() => { increment() }}>+1</button>
    </>
  )
}

const styles = {
  counter: {
    display: "inline-block",
    width: "30px",
    textAlign: "center"
  }
}

export default NewCounter