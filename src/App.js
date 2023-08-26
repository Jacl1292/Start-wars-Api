
import './App.css';

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import { Principal } from './views/principal';
import { Planet } from './views/planet';
import { People } from './views/people';
import { Vehicle } from './views/vehicle';
import { Film} from './views/film'
import { Planetdescriptions } from './views/planetdescriptions';
import { Peopledescriptions } from './views/peopledescriptions';
import { Vehicledescriptions } from './views/vehicledescriptions';

export const App = () => {
  
	return (
		<div>
			<BrowserRouter>
        <div>
					<Routes> 
						<Route exact path="/index.html"  Component={Principal}/>
						<Route exact path="/Film" Component={Film} />
						<Route exact path="/" Component={Principal} />
						<Route exact path="/Planet/Description" Component={Planetdescriptions} />
						<Route exact path="/Planet" Component={Planet} />
						<Route exact path="/People/Description" Component={Peopledescriptions} />
						<Route exact path="/People" Component={People} />
						<Route exact path="/Vehicle/Description" Component={Vehicledescriptions} />
                        <Route exact path="/Vehicle" Component={Vehicle} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>  
			</BrowserRouter> 
		</div>
	);
};

export default injectContext(App);
