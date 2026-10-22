import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";

export function Contato(){
    const { id } = useParams()

    return(
        <>
            <NavBar></NavBar>
            <h1>Contato</h1>
            <h1>{id}</h1>
        </>
    )
}