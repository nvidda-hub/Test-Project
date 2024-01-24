import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const App = async () => {
  const [count, setCount] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const catData = await axios.get('http://localhost:3000/cats')
  console.log('catData : ', catData)
  const handleTimeOut = ( ) => {
    setTimeout(() => {
      setTimer(timer + 1000)
    }, 1000);
  }

  return (
    <>
      <div className='flex flex-row justify-between'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card space-x-1">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => handleTimeOut()}>
          time is {timer}
        </button>
        <div className='bg-red-800 px-4 py-2 rounded-md text-white hover:bg-green-800 cursor-pointer'>
          Hello there
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
