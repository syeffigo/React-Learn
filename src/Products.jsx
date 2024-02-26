import React, { useState } from 'react'

function Products({naam, data}) {
   const [a,b] = useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
       67 is {naam}
       <h2>{data.age}</h2>
       <h2>{data.name}</h2>
       <h2 className={`${a == false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey"}</h2>
       <button onClick={()=> b(!a)} className='px-3 bg-blue-500 rounded-md text-xs'>Change</button>
    </div>
  )
}

export default Products
