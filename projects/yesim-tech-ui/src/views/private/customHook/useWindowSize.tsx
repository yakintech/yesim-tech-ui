import { useEffect, useState } from "react"


export const useWindowSize = () => {
    const [windowSize, setwindowSize] = useState<any>({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
      
        const getSize = () => {
            setwindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", getSize)
    
      return () => {
        window.removeEventListener("resize", getSize)
      }
    }, [])

    return windowSize

}