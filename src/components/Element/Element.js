import React from 'react';

const Element = ({element:{id, name, old, year, city}, getElementId}) => {

    return (
        <div>
            <div>
                <div>Name:{name}</div>
                <div>Old:{old}</div>
                <div>Year:{year}</div>
                <div>City:{city}</div>
            </div>
            <button onClick={()=>getElementId(id)}>Delete</button>
        </div>
    );
};

export default Element;