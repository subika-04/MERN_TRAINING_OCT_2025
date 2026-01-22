import React from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
    const [likeCount,setLikeCount]=useState(0);
    const [dislikeCount,setdislikeCount]=useState(0);
  return (
    <div className="use">
      <h1>useState example</h1>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(count+1)}>Increase</button><br></br><br></br>
      <button onClick={()=>setLikeCount(likeCount+1)}>👍{likeCount}</button>
      <button onClick={()=>setdislikeCount(dislikeCount+1)}>👎{dislikeCount}</button>
    </div>
  )
}

export default State