import { useEffect, useState } from "react"
import axios from "axios"
import { CryptoList } from "../react-app-env"

export default function useFetch( url: string ){

    const [ data, setData ] = useState<CryptoList>()
    const [ error, setError ] = useState<unknown>(null)
    const [ loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (
            async function(){
                try{
                    setLoading(true)
                    const response = await axios.get(url)
                    setData(response.data)
                }catch(err){
                    setError(err)
                }finally{
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading }
}