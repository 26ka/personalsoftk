import { useLocation } from "react-router-dom";

export function AmpliarInfo(){

    const location = useLocation();

    let producto=location.state.producto


    return(
        <>
            <h1>{producto.nombre}</h1>
        </>
    )


}