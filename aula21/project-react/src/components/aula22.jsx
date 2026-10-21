import { useEffect, useState } from "react"

function Aula22(){
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log("sem Dependencia")
    })

    useEffect(() => {
        console.log("dependencia vazia")
    }, [])

    useEffect(() => {
        console.log("count como dependencia")
    }, [count])

    return (
        <>
        <p>{count}</p>

        <button onClick={() => setCount(count+1)}>Adicionar</button>
        <button onClick={console.log("as")}>asd</button>
        </>
    )
}

export default Aula22