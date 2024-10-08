import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
//   useState -----------------------------------------
  const [isClicked, setIsClicked] = useState(false);

  let [count, setCount] = useState(0);

  const [isActive, setIsActive] = useState(false);
//   useState -----------------------------------------  
  function handelSubmit() {
    if (isClicked == false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  }

  function handelSubmit2() {
    if (isActive == false) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handelSubmit3() {
    setCount((count = count + 1));
  }

  // Use Effect   --------------------------------------------

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  useEffect(() => {
    alert(count);
  }, [count]);

  // Use Effect   --------------------------------------------

  return (
    <div className="App">
      
      {isClicked ? (
        <h2 className="font-in-text">Yes {count}</h2>
      ) : (
        <h2 className="font-in-text">No {count}</h2>
      )}

      {isActive ? (
        <h2 className="font-in-text">True</h2>
      ) : (
        <h2 className="font-in-text">False</h2>
      )}{" "}

      <br></br>
      <h2 className="font-in-text">Count is : {count}</h2>

      <button className="button-useState-UseEffect" onClick={handelSubmit}>
        Click Here
      </button>

      <button className="button-useState-UseEffect" onClick={handelSubmit2}>
        New BUTTON
      </button>{" "}

      <br></br>

      <button className="button-useState-UseEffect" onClick={handelSubmit3}>
        Counter BUTTON
      </button>
    </div>
  );
}

export default App;
