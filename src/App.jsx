  import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tag from './components/tag'
import Random from './components/random'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='bg-blue-400 w-full h-1000 flex flex-col background relative items-center' >
    <h1 className='  bg-white rounded-lg w-11/12 mt-[40px] text-center px-10 py-2 text-4xl font-bold'>gif generate</h1>
    <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
        
    </div>
     
   
   </div>
  )
}

export default App
