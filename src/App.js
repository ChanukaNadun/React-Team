import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  let [count, setCount] = useState(0);

function handelSubmit(){
  if(isClicked == false){
    setIsClicked(true);
  }else{
    setIsClicked(false);
  }
  setCount(count = count + 1 );
}

  return (
    <div className="App">
      
      {isClicked ? (<div>Yes {count}</div>) : (<div>No {count}</div>)}

      <button onClick={handelSubmit}>Click Here</button>
      
    </div>
  );
}

export default App;
