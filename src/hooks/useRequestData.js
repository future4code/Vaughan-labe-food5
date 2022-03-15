import axios from "axios"
import { useEffect, useState } from "react"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(()=>{
        axios.get(url, {
            headers: {
                Auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkJhbmFuaW5oYSwgOTgsIDY1IC0gQmFuYW5pbmhhIiwiaWF0IjoxNjQ3MjgxODYwfQ.v_AQdOG33NHtcXjizcAM6QR0qj-SCrtHx5VT0xM2XcE'
            }
        })
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
            alert('Ocorreu um erro, try again!')
        })
    }, [url])
    return ([data])
}

export default useRequestData