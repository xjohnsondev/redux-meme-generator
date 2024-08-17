import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const dispatch = useDispatch();
  const img = useSelector((state) => state.img);
  const topText = useSelector((state) => state.topText);
  const bottomText = useSelector((state) => state.bottomText);
  const memeBank = useSelector((state) => state.memeBank);

  const handleImageUrlChange = (e) => {
    dispatch({ type: 'SET_IMAGE', payload: e.target.value });
  };

  const handleTopTextChange = (e) => {
    dispatch({ type: 'SET_TOP_TEXT', payload: e.target.value });
  };

  const handleBottomTextChange = (e) => {
    dispatch({ type: 'SET_BOTTOM_TEXT', payload: e.target.value });
  };

  function createMeme(e) {
    e.preventDefault()
    dispatch({ type: 'ADD_MEME' })
  }

  function deleteMeme(meme){
    dispatch ({ type: 'DELETE_MEME', payload: meme.id })
  }

  return (
    <div className="App">
      <div className='header'>
        <h1 className='title'>Meme Generator</h1>

        <form>
          <input
            placeholder="Image URL"
            value={img || ''}
            onChange={handleImageUrlChange}
          />
          <input
            placeholder="Top Text"
            value={topText || ''}
            onChange={handleTopTextChange}
          />
          <input
            placeholder="Bottom Text"
            value={bottomText || ''}
            onChange={handleBottomTextChange}
          />
          <button onClick={createMeme}>Create Meme</button>
        </form>
      </div>

      <div className='memeField'>
        <ul>
          {memeBank.map(meme => (
            <li key={uuidv4()} onClick={() => deleteMeme(meme)}>
              <img className='image' src={meme.img} />
              <p className='top-text'>{meme.topText}</p>
              <p className='bottom-text'>{meme.bottomText}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
