import React, { useRef } from 'react'
import { useGithub } from '../../../hooks/useGithub'
import { useFocus } from './useFocus'
import { useWindowSize } from './useWindowSize'

function CustomHook() {

    const { loading, error, user } = useGithub("yakintech")
    const { ref, focusElement } = useFocus()
    const { width, height } = useWindowSize()


    const add = () => {
        //operations
        focusElement()
    }

    return <>
        <h1>Width: {width}</h1>
        <h1>Height: {height}</h1>

        <hr />

        <div>
            <input ref={ref} type="text" />
            <hr />
            <button onClick={add}>Focus</button>
        </div>

        {
            loading ? <p>Loading...</p> :
                <div>
                    <img src={user.avatar_url} alt={user.login} />
                    <p>{user.login}</p>
                    <p>{user.company}</p>
                    <p>{user.location}</p>
                </div>
        }
    </>
}

export default CustomHook