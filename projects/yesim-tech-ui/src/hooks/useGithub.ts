import { useEffect, useState } from "react";



export function useGithub(name: any) {

    const [user, setuser] = useState<any>({})
    const [error, seterror] = useState({})
    const [loading, setloading] = useState(true)

    const country = "Türkiye"

    useEffect(() => {
        async function fetchUser() {
            let result = await fetch("https://api.github.com/users/" + name)
            let data = await result.json()
            setuser(data)
            setloading(false)

        }
        fetchUser()

    }, [])

    return { user, error, loading, country }


}