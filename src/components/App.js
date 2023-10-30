import React from 'react'
import { useState,useEffect } from 'react'

function App() {
const [image,setImage]=useState(null)
useEffect (()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r=>r.json)
    .then(data => setImage(data.image))
})
if (!image){
    return <p>Loading...</p>
}
  return (
    <div>
        <img src={image} />
      
    </div>
  )
}

export default App
