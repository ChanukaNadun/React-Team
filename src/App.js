import HomeImage from'./assets/test.jpeg';
import './App.css'

function App() {
  return (
      <div>
        <img className='image-style' src={HomeImage} alt='Show this image'></img>
        <div className='text-style'>This test use for css text</div>
      </div>

  );
}

export default App;
