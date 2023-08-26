import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicle =()=>{
    const { store, actions} = useContext(Context);
    const url = "https://www.swapi.tech/api/vehicles/" ;
    return(
        <div>
            <Navbar  />
            <div className="container-page">
                <div className="row">
                    <div className="col-12 text-center text-warning  mt-4">
                        <h1>Vehicles</h1>
                    </div>
                
                {
                    !!store.Vehicles ?
                        store.Vehicles.results.map((vehicle) => {
                            const index = vehicle.uid;
                            const img = vehicle.name.split(" ").join("-")+".jpg";
                            const imagePath = require(`../imag/${img}`);
                            return (
                                
                                <div className="card-des col-md-4 col-lg-4 col-sm-12 mt-5 " key={index} >
                                    <div className="card bg-dark">
                                        <img src={imagePath} className="card-img-top" style={{height: "18rem"}} alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-warning">{vehicle.name}</h5>
                                            <Link to="/Vehicle/Description" className="btn btn-warning text-light" onClick={() => actions.getVehicle(url + index)}>Go somewhere</Link>
                                        </div>
                                    </div>
                                    
                                </div>)


                        }) :
                        <div className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
                </div>
            </div>
            <Footer/>
        </div>
    )
}