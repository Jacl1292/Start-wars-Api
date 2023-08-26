import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Context } from "../store/appContext";

import './principal.css'
import { Link } from "react-router-dom";

export const Planetdescriptions = () => {
    const { store, actions } = useContext(Context);
   
    return (
        <div >
            <Navbar />
            <div className="container-page " >
                {!! store.Planet ?
                
                <div className="row justify-content-center">
                    <div className="col-12 text-center text-warning  mt-4">
                        
                      <h1>{store.Planet.result.properties.name}</h1> 

                    </div>
                    <div className="card-des col-10 mt-5 " >
                        <div className="card  bg-dark"  >
                            <img src={require(`../imag/${store.Planet.result.properties.name.split(" ").join("-")+".jpg"}`)} className="card-img-top" style={{ height: "40rem"}} alt="..." />
                            <div className="card-body  text-start">
                                <h5 className="card-title text-warning text-center">{store.Planet.result.properties.name}</h5>
                                <p className="text-warning">Descripcion: {store.Planet.result.description}</p>
                                <p className="text-warning">Diametro: {store.Planet.result.properties.diameter}</p>
                                <p className="text-warning">Terreno: {store.Planet.result.properties.terrain}</p>
                                <p className="text-warning">Clima: {store.Planet.result.properties.climate}</p>
                                <p className="text-warning">Habitantes: {store.Planet.result.properties.population}</p>

                                <Link to="/Planet" className="btn btn-warning col-12 text-light">Go to Planet</Link>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
                } 
            </div>
            <Footer />
        
        </div>

    )
}
export default Planetdescriptions;

/*
 const planet = store.Planet.result;
    const img = planet.properties.name.split(" ").join("-")+".jpg";
        const imagePath = require(`../imag/${img}`);
        */