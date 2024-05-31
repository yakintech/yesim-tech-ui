import React, { useState } from 'react'
import Child from './Child'
import Child2 from './Child2'
import YButton from '../../../components/core-components/button'

function Parent() {

  const [counter, setcounter] = useState(0)
  const [name, setname] = useState("")


  console.log('Parent Rendered')

  return <>
    <input type="text" value={name} onChange={(e) => setname(e.target.value)} />
    <h1>Counter: {counter}</h1>
    <button onClick={() => setcounter(counter + 1)}>Increase</button>
    <hr />
    <Child />
    <hr />
    <Child2/>
    <YButton>Test</YButton>
  </>
}

export default Parent