import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isClicked, setIsClicked] = useState(false);

function handelSubmit(){
  if(isClicked == false){
    setIsClicked(true);
  }else{
    setIsClicked(false);
  }
  
}

  return (
    <div className="App">
      {isClicked && <div>clicked button</div>}
      {!isClicked && <div>click again</div>}
      <button onClick={handelSubmit}>Click Here</button>
    </div>
  );
}

export default App;
