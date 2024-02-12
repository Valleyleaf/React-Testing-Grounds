import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import handleButtonClick from './assets/js/EventRouter'


function App() {
  const [event, setEvent] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TestingGrounds</h1>
      <div className="card">
        <button onClick={() => setEvent((event) => event + 1)}>
          Latest event is {event}
        </button>
      </div>

      <div className='buttonGrid'>
        <button id='Alpha' onClick={() => handleButtonClick(0)}>Event Alpha</button>
        <button id='Beta' onClick={() => handleButtonClick(1)}>Event Beta</button>
        <button id='Charlie' onClick={() => handleButtonClick(2)}>Event Charlie</button>
        <button id='Delta' onClick={() => handleButtonClick(3)}>Event Delta</button>
        <button id='Echo' onClick={() => handleButtonClick(4)}>Event Echo</button>
        <button id='Foxtrot' onClick={() => handleButtonClick(5)}>Event Foxtrot</button>
      </div>
    </>
  )
}

export default App
