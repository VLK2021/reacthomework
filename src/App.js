import {useState} from "react";

import Form from "./components/Form/Form";
import Elements from "./components/Elements/Elements";
import './App.css';


function App() {

    const [elements, setElements] = useState([]);

    const getFormData = (data) => {
        setElements([...elements, {id: new Date().getTime(), ...data}])
    }

    const getElementId = (id) => {
        setElements(elements.filter(element => element.id !== id));
    }

    return (
        <div>
            <Form getFormData={getFormData}/>
            <Elements elements={elements} getElementId={getElementId}/>
        </div>
    );
}

export default App;
