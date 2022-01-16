import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";

const Cars = (trigger) => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger]);

    return (
        <div>
            <div>
                {cars.map(car => <Car
                    key={car.id}
                    car={car}
                />)}
            </div>

        </div>
    );
};

export default Cars;