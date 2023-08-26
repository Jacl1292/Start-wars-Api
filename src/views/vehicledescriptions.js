import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Context } from "../store/appContext";

import './principal.css'
import { Link } from "react-router-dom";

export const Vehicledescriptions =()=>{
    const { store, actions } = useContext(Context);
    
    return (
        <div >
            <Navbar />
            <div className="container-page " >
              {!! store.Vehicle ?
                <div className="row justify-content-center">
                    <div className="col-12 text-center text-warning  mt-4">
                      <h1>{store.Vehicle.result.properties.name}</h1> 

                    </div>
                    <div className="card-des col-10 mt-5 " >
                        <div className="card  bg-dark"  >
                            <img src={require(`../imag/${store.Vehicle.result.properties.name.split(" ").join("-")+".jpg"}`)} className="card-img-top" style={{ height: "40rem"}} alt="..." />
                            <div className="card-body  text-start">
                                <h5 className="card-title text-warning text-center">{store.Vehicle.result.properties.name}</h5>
                                <p className="text-warning">Descripcion: {store.Vehicle.result.description}</p>
                                <p className="text-warning">model: {store.Vehicle.result.properties.model}</p>
                                <p className="text-warning">vehicle_class: {store.Vehicle.result.properties.vehicle_class}</p>
                                <p className="text-warning">manufacturer: {store.Vehicle.result.properties.manufacturer}</p>
                                <p className="text-warning">cost_in_credits: {store.Vehicle.result.properties.cost_in_credits}</p>
                                <p className="text-warning">passengers: {store.Vehicle.result.properties.passengers}</p>

                                <Link to="/Vehicle" className="btn btn-warning col-12 text-light">Go to Vehicle</Link>
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
export default Vehicledescriptions;

/**/

