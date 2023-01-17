export async function generarToken(){

    const client_id="client_id=56264f711eb34088894db7f8be289587"
    const client_secret="client_secret=6185860a462d460599b79cb015d3b165"
    const grant_type="grant_type=client_credentials"
    
     let dataEnvio=grant_type+"&"+client_secret+"&"+client_id
     
     const URL="https://accounts.spotify.com/api/token"

     const PETICION={
        method:"POST",
        headers:{"content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
     }
      let respuesta=await fetch(URL,PETICION)

      let token=await respuesta.json()
       let tokenDefinitivo=token.token_type+" "+token.access_token
        return(tokenDefinitivo)

}