import React, { useContext } from "react";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import './principal.css'


export const Principal = () => {
    const { store, actions } = useContext(Context);
    const getIndex =(index)=>{
       store.Film = index;
    }
    return (
        <div >
            
            <Navbar />
            
           
            <div className="container-page " >
                <div className="row">
                    <div className="col-12 text-center text-warning  mt-4">
                        <h1>Films</h1>
                    </div>
                
                {
                    !!store.films ?
                        store.films.result.map((film, i) => {
                            const img = film.properties.title.split(" ").join("-")+".jpg";
                            const imagePath = require(`../imag/${img}`);
                            return (
                                
                                <div className="card-des col-md-4 col-lg-4 col-sm-12 mt-5 " key={i} >
                                    <div className="card  bg-transparent" style={{clipPath:"polygon(38% 0, 50% 13%, 100% 14%, 100% 100%, 0 100%, 0 0)"}} >
                                        <img src={imagePath} className="card-img-top" style={{height: "20rem", clipPath:"polygon(38% 0, 50% 13%, 100% 14%, 100% 100%, 0 100%, 0 0)"}} alt="..." />
                                        <div className="card-body text-center">
                                            <h5 className="card-title text-warning">{film.properties.title}</h5>
                                            <Link to="/Film" className="btn btn-warning text-light" onClick={() => getIndex(i)}>Go somewhere</Link>
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
            <Footer />
        </div>
    )
}