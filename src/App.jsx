import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      {toggle && <Counter count={count} setCount={setCount} />}
      {/* {toggle ? <Counter /> : "카운터"} */}
      <button
        className="bg-pink-300 px-4 py-2 rounded-lg text-white font-bold mt-4"
        onClick={onClickToggle}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
