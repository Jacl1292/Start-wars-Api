import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Context } from "../store/appContext";

import './principal.css'
import { Link } from "react-router-dom";

export const Film = () => {
    const { store, actions } = useContext(Context);
    const peli = store.films.result[store.Film].properties
    const img = peli.title.split(" ").join("-")+".jpg";
        const imagePath = require(`../imag/${img}`);
    return (
        <div >
            <Navbar />
            <div className="container-page " >
                <div className="row justify-content-center">
                    <div className="col-12 text-center text-warning  mt-4">
                        <h1>{peli.title}</h1>
                    </div>
                    <div className="card-des col-10 mt-5 " >
                        <div className="card  bg-dark"  >
                            <img src={imagePath} className="card-img-top" style={{ height: "40rem"}} alt="..." />
                            <div className="card-body  text-start">
                                <h5 className="card-title text-warning text-center">{peli.title}</h5>
                                <p className="text-warning">Director: {peli.director}</p>
                                <p className="text-warning">Productor: {peli.producer}</p>
                                <p className="text-warning">Creado: {peli.release_date}</p>
                                <p className="text-warning">Descripcion: {store.films.result[store.Film].description}</p>
                                <p className="text-warning">{peli.opening_crawl}</p>

                                <Link to="/" className="btn btn-warning col-12 text-light">Go to Principal</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Film;


    
