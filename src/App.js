import Counter from "./components/counter/Counter";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const addNum = async () => {
    setCount(count + 1);
  };

  const minNum = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Counter count={count} minNum={minNum} addNum={addNum} />
    </>
  );
};

export default App;
