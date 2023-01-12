export async function servicioscancionesTop(){


    const URI="https://api.spotify.com/v1/artists/1mX1TWKpNxDSAH16LgDfiR/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:" Bearer BQBXCoo6102JsSGNAU7Clh25fZMrYvLMivhudbKSwC7cUPHD4ZINpHGwfQjON3xIjzYKLqmESXr6HaocpbBBE8st-ICUScoaHoHkft8_zldQhpVo6nZnweQmWk9YQUCkFJ3x5xXmdsd6pRnKTHwqNZA7FFk5zBxYfE9w-6STq4mbZ_NDbZx4T9tQOxU6qFw"}
    }

    let respuesta=await fetch(URI,PETICION)

    let canciones=await respuesta.json()

    return (canciones)

}