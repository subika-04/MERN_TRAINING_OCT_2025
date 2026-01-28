import React, { useReducer } from 'react'

const reducerfunction=(state,action)=>{
switch (action.type) {
  case "increment":
    return {count:state.count+1}
  case "decrement":
    return {count:state.count-1}
  case "reset":
    return {count:0}
  default:
    return state;
}
}
const initialState={count:0}
const Reducer = () => {
  const [state,dispatch]=useReducer(reducerfunction,initialState)
  return (
    <div className='reducer'>
      <h2>Reducer</h2>
      <h2>Count:{state.count}</h2>
      <button onClick={()=>dispatch({type:"increment"})}>++</button>
      <button onClick={()=>dispatch({type:"decrement"})}>--</button>
      <button onClick={()=>dispatch({type:"reset"})}>RESET</button>
    </div>
  )
}

export default Reducer