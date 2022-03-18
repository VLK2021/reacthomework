import React from 'react';

import Element from "../Element/Element";

const Elements = ({elements, getElementId}) => {

    return (
        <div>
            {
                elements.map(element => <Element key={element.id} element={element} getElementId={getElementId}/>)
            }
        </div>
    );
};

export default Elements;