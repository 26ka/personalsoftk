import {servicioscancionesTop} from '../services/servicioCanciones.js'
import { useEffect, useState } from 'react'
import { Footer } from '../shared/Footer/Footer.js'

export function Music(){
    //usando el useState para amacenar la respuesta 
    //el api en forma global
    const[canciones,setCanciones]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)


    //usando el hook useeffect para limitar el consumo
    //del api a una sola vez
    useEffect(function(){
        servicioscancionesTop().then(function(respuesta){
        setCanciones(respuesta)
        setEstadoCarga(false)
       })
        
    },[])

   
    //render del componente
    if(estadoCarga==true){
        return(
            <>

            <h2>estamos cargando las canciones</h2>
            </>
        )

    }
    else{
        return(
            <>
            <h2>
                canciones de la banda:</h2>
                <div className="row row-cols-1-md-3 g-1">
                {
                    canciones.tracks.map(function(cancion){
                        return(
                            <div className=" col pb-5 h-100 text-center h-50 p-2 ">  
                                <div className="card shadow text-center h-100 w-100 p-2 " >
                                 <img src={cancion.album.images[0].url} alt=""className="h-100 img-fluid w-100"></img>
                                 <h1>{cancion.name}</h1>
                                 <audio controls  src={cancion.preview_url}></audio>
                            </div>
                            </div>
                            
                        )
                    })
                } 
                 </div>
                  
                 <Footer/>
            </>

        )
        

    }
 

}