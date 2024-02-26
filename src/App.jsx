import React, { useState } from 'react'
import Products from './Products'
function App() {
  
  var [a,b]  = useState(69);

  return (
    <div className='w-full h-screen bg-zinc-700'>
      <div className='w-44 h-32 rounded-xl bg-red-600 p-3 text-white'>
        <h1>{a}</h1>
        <button onClick = {() => b(a+1)} className='px-3 bg-green-500 rounded-md text-xs'>Click</button>
        </div>

        <Products naam = "value" data = {{ age: 25, name : "Aman"}}/>
    </div>
  )
}

export default App
