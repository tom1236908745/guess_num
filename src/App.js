import { useState } from "react";

const random = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
};

function Guess({ onChange }) {
  const [num, setNum] = useState(0);
  const handle = (e) => setNum(e.target.value);
  const handleClick = (e) => onChange(num * 1);
  return (
    <div>
      <input type="number" value={num} onChange={handle} />
      <button onClick={handleClick}>guess</button>
    </div>
  );
}

export default function App() {
  const max = 50;
  const initialCount = 5;
  const [answer, setAnswer] = useState(random(max));
  const [count, setCount] = useState(initialCount);
  const [message, setMessage] = useState("");

  const judge = (num) => {
    if (count === 0) {
      replay();
      return;
    }
    if (num === 0) return;

    setCount(count - 1);

    if (num === answer) {
      setMessage("correct！");
    } else if (count === 1) {
      setMessage("the answer is" + answer);
    } else if (num > answer) {
      setMessage("more less");
    } else if (num < answer) {
      setMessage("more");
    }
  };

  const replay = () => {
    setAnswer(random(max));
    setCount(initialCount);
    setMessage("");
  };

  return (
    <>
      <p>guess num!!! 0 &lt; num &lt;= 50</p>
      <Guess onChange={judge} />
      {message}
      <p>{count} times left</p>
      <button onClick={replay}>from begining</button>
    </>
  );
}
