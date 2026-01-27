import React from 'react'
import Child from './Child';

const Parent = () => {
    const getData=(data)=>{
        console.log(`Data Recieved from child: `,data);
    }
  return (
    <div>
        <Child send={getData}></Child>
    </div>
  )
}

export default Parent