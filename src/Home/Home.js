import './Home.css'

import {Footer} from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2> JESSE & JOY </h2>
                            <p>
                            Desde pequeños, ambos empiezan a demostrar su gusto por la música, pero es en 2001 cuando deciden luchar por su sueño y comienzan a escribir canciones junto a su padre. Pronto esas canciones tendrían buen recibimiento de parte de sus amigos, quienes incluso les pedían copias en Cd de las canciones que tocaban y grababan de forma artesanal. Una de esas copias llegó a manos de un sello, y así, el 18 de abril de 2005 Jesse y Joy hacen realidad el sueño de formar parte del elenco exclusivo de Warner Music.
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/JESSI.jpg?alt=media&token=13ddcb1a-ae50-4416-9751-b465a0af6975" className="img-fluid w-100"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Mexico</h3>
                                    <h5>enero 2023</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>enero 2023</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">new york</h3>
                                    <h5>febrero 2023</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">cartagena</h3>
                                    <h5>enero 2023</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/tommy.jpg?alt=media&token=bf6df3e9-41f9-4af9-8eaf-d0548664e959" alt="" className="img-fluid w-100"/>
                           <p>
                           Tommy Torres supo que tenía algo muy especial entre manos cuando se sentó con Jesse & Joy a componer el éxito del dúo de hermanos mexicanos "
                           </p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/marco.jpg?alt=media&token=d7f57e84-b251-4774-ba2f-c12b6b3ab740" alt="" className="img-fluid w-100"/>
                           <p>Jesse & Joy son un dúo de música pop originario de México, formado en 2005 por los hermanos Jesse (1982) 1​ y Joy Huerta Uecke (1986) en la Ciudad de México. 2​3​ El dúo ha lanzado seis álbumes de estudio, dos álbumes en vivo y un EP en Warner Music Latina. También ha realizado giras internacionales y ha ganado un Premio Grammy al Mejor Álbum Latino y cinco Premios Grammy Latinos en varias categorías.</p>
                        </div>
                        <div className="col-12 col-md-4">
                           <img src="https://firebasestorage.googleapis.com/v0/b/spotykrl.appspot.com/o/luis%20%20fonsi.jpg?alt=media&token=7e1252c2-5e1c-48b8-ab2a-5aef2b011873" alt="" className="img-fluid w-100"/>
                           <p>Tanto, producida por Jesse, Martin Terefe y Charlie Heat y compuesto por Jesse y Joy junto a Tommy Torres, es el nuevo sencillo de este dúo pop latino junto al intérprete de Despacito.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
            
        </>
    )

}