import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Context } from "../store/appContext";

import './principal.css'
import { Link } from "react-router-dom";

export const Peopledescriptions =()=>{
    const { store, actions } = useContext(Context);
    
    return (
        <div >
            <Navbar />
            <div className="container-page " >
              {!! store.People ?
                <div className="row justify-content-center">
                    <div className="col-12 text-center text-warning  mt-4">
                      <h1>{store.People.result.properties.name}</h1> 

                    </div>
                    <div className="card-des col-10 mt-5 " >
                        <div className="card  bg-dark"  >
                            <img src={require(`../imag/${store.People.result.properties.name.split(" ").join("-")+".jpg"}`)} className="card-img-top" style={{ height: "40rem"}} alt="..." />
                            <div className="card-body  text-start">
                                <h5 className="card-title text-warning text-center">{store.People.result.properties.name}</h5>
                                <p className="text-warning">Descripcion: {store.People.result.description}</p>
                                <p className="text-warning">height: {store.People.result.properties.height}</p>
                                <p className="text-warning">hair_color: {store.People.result.properties.hair_color}</p>
                                <p className="text-warning">eye_color: {store.People.result.properties.eye_color}</p>
                                <p className="text-warning">birth_year: {store.People.result.properties.birth_year}</p>
                                <p className="text-warning">gender: {store.People.result.properties.gender}</p>

                                <Link to="/People" className="btn btn-warning col-12 text-light">Go to People</Link>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            </div>
            <Footer />
        
        </div>

    )
}
export default Peopledescriptions;

/*  {!! store.People ?
                <div className="row justify-content-center">
                    <div className="col-12 text-center text-warning  mt-4">
                      <h1>{people.properties.name}</h1> 

                    </div>
                    <div className="card-des col-10 mt-5 " >
                        <div className="card  bg-dark"  >
                            <img src={imagePath} className="card-img-top" style={{ height: "40rem"}} alt="..." />
                            <div className="card-body  text-start">
                                <h5 className="card-title text-warning text-center">{people.properties.name}</h5>
                                <p className="text-warning">Descripcion: {people.description}</p>
                                <p className="text-warning">height: {people.properties.height}</p>
                                <p className="text-warning">hair_color: {people.properties.hair_color}</p>
                                <p className="text-warning">eye_color: {people.properties.eye_color}</p>
                                <p className="text-warning">birth_year: {people.properties.birth_year}</p>
                                <p className="text-warning">gender: {people.properties.gender}</p>

                                <Link to="/People" className="btn btn-warning col-12 text-light">Go to People</Link>
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
                
                
                
                 const people = store.People.result;
    const img = people.properties.name.split(" ").join("-")+".jpg";
        const imagePath = require(`../imag/${img}`);*/