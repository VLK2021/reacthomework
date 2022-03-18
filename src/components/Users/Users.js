import React, {useEffect} from 'react';
import axiosService from "../../services/axios.service";

const Users = () => {

    useEffect(()=>{
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
            .then(response => response.json())
            .then(value => console.log(value))
    }, []);
    return (
        <div>

        </div>
    );
};

export default Users;