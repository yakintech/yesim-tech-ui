import React, { useEffect, useState } from 'react'

function Child() {

    const [counter, setcounter] = useState(0)
    console.log('Child Rendered')


    let date = new Date()


    return <>
        <h1>Date: {date.toString()}</h1>
        <div>Child Component</div>
        <h3>Counter-2: {counter}</h3>
        <button onClick={() => setcounter(counter + 1)}>Increase-2</button>
    </>
}

export default React.memo(Child)
//React.memo ile bu componenti memorize etmiş olduk.