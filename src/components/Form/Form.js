import React from 'react';
import {useForm} from "react-hook-form";

const Form = ({getFormData}) => {

    const {register, handleSubmit, reset} = useForm();

    const submit = (data) => {
        getFormData(data)
        reset()

    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name:<input type="text" {...register('name')}/></label>
                <label>Old:<input type="number" {...register('old')}/></label>
                <label>Year:<input type="number" {...register('year')}/></label>
                <label>City:<input type="text" {...register('city')}/></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;
