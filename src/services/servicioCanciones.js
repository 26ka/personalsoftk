import { generarToken } from "./servicioToker"
export async function servicioscancionesTop(){
    let token=await generarToken()


    const URI="https://api.spotify.com/v1/artists/1mX1TWKpNxDSAH16LgDfiR/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }

    let respuesta=await fetch(URI,PETICION)

    let canciones=await respuesta.json()

    return (canciones)

}