import React, { useRef, useState } from 'react'
import { YDataGrid } from '../../../components/core-components/data-grid'

function RefHook() {

    const [counter, setcounter] = useState(0)

    let pRef = useRef<HTMLParagraphElement>(null)
    let counterRef = useRef<number>(10)

    const changeColor = () => {
        //pRef.current?.style.setProperty('color', 'red')
        pRef.current!.style.color = 'red'
    }


    const increase = () => {
        counterRef.current++
        setcounter(counter + 1)
    }

    return <>
        <p ref={pRef}>Hello</p>
        <button onClick={changeColor}>Change Color</button>
        <hr />
        <h3>Counter: {counterRef.current}</h3>
        <button onClick={() => increase()}>Increment</button>
    </>
}

export default RefHook