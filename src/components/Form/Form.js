import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";

const Form = ({update}) => {

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm();

    const submit = (car) => {
        carService.create(car).then(value => update(value))
    }

    // watch(event => console.log(event));

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')} /></label></div>
                <div><label>Price: <input type="text" defaultValue={''} {...register('price')}/></label></div>
                <div><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label></div>
                <button>save</button>
                <button>delete</button>
            </form>
        </div>
    );
};

export default Form;