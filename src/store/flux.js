const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            //Your data structures, A.K.A Entities
            films: null,
            Peoples: null,
            Vehicles: null,
            Planets: null,
            Film:null,
            Planet:null,
            People:null,
            Vehicle:null
        },
        actions: {
            //(Arrow) Functions that update the Store
            // Remember to use the scope: scope.state.store & scope.setState()

            getFilm: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            films: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getPeople: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            Peoples: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getVehicles: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            Vehicles: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getPlanets: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            Planets: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getPlanet: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            Planet: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getPeoples: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            People: data
                        });
                    })
                    .catch(error => { console.log(error) })
            },
            getVehicle: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            Vehicle: data
                        });
                    })
                    .catch(error => { console.log(error) })
            }
            


        }
    };
};

export default getState;