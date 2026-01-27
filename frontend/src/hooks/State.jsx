import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increase</button>
    <h2 onClick={()=>setLike(like+1)}>👍{like}</h2>
    <h2 onClick={()=>setDislike(dislike+1)}>👎{dislike}</h2>
    </>
  )
}

export default State