import './App.css';
import {useEffect, useState} from "react";

function App() {

let [user, setUser] = useState([]);

    useEffect(() => {
       fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
           .then(response => response.json())
           .then(users => {
               console.log(users)
               setUser([...users.photos])
           })
    }, []);

    return (
        <div>
            {
                 user.map(value =>  <div>{value.id} {value.earth_date} {value.camera.rover_id}</div>)
            }
        </div>
    );
}

export default App;
////https://jsonplaceholder.typicode.com/users
// //https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
//https://rickandmortyapi.com/api/character