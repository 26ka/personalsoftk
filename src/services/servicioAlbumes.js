export async function servicioAlbumes(){


    const URI="https://api.spotify.com/v1/artists/1mX1TWKpNxDSAH16LgDfiR/albums"

    const PETICION={
        method:"GET",
        headers:{Authorization:" Bearer BQBXCoo6102JsSGNAU7Clh25fZMrYvLMivhudbKSwC7cUPHD4ZINpHGwfQjON3xIjzYKLqmESXr6HaocpbBBE8st-ICUScoaHoHkft8_zldQhpVo6nZnweQmWk9YQUCkFJ3x5xXmdsd6pRnKTHwqNZA7FFk5zBxYfE9w-6STq4mbZ_NDbZx4T9tQOxU6qBearer BQDf1VVvH5E7clmdCezFJ7JSeVcqF1kp-b4Obrf9UBMPpDDO-DuICkGa5R1Gdj5kse7gR9wMO7Ly8VMmCRImYhYHi5Myj6nUKCUJv6u848vQebVfqDf_004iDDJapDkzbNA8yollO1a1rNgneFQkRXuQExy9JCOtz_tKZiYMdHkjVOcONhcI55aXxkn2o8w"}
    }

    let respuesta=await fetch(URI,PETICION)

    let albumes=await respuesta.json()

    return (albums)

}
