import './App.css';

import {useState} from "react";

function App() {

//варіант номер 1==========================================================================================================
//     const [counter, setCounter] = useState([0, 0, 0]);
//
//     return (
//         <div>
//             <div>
//                 <button onClick={() => setCounter([counter[0] + 1, counter[1], counter[2]])}>Тиць+:</button>
//                 {counter[0]}
//                 <button onClick={() => setCounter([counter[0] - 1, counter[1], counter[2]])}>Тиць-:</button>
//             </div>
//
//             <div>
//                 <button onClick={() => setCounter([counter[0], counter[1] + 1, counter[2]])}>Тиць+:</button>
//                 {counter[1]}
//                 <button onClick={() => setCounter([counter[0], counter[1] - 1, counter[2]])}>Тиць-:</button>
//             </div>
//
//             <div>
//                 <button onClick={() => setCounter([counter[0], counter[1], counter[2] + 1])}>Тиць+:</button>
//                 {counter[2]}
//                 <button onClick={() => setCounter([counter[0], counter[1], counter[2] - 1])}>Тиць-:</button>
//             </div>
//         </div>
//     );


    //варіант номер 2===================================================================================================

    const [counter, setCounter] = useState([0, 0, 0]);

    const count = (n) => {
        setCounter(
            counter.map((value, index) => {
                if (n === index){
                    return value + 1;
                } else {
                    return value;
                }
            })
        )
    }

    return (
        <div>
            <button onClick={() => count(0)}>Тиць+:{counter[0]}</button>
            <button onClick={() => count(1)}>Тиць+:{counter[1]}</button>
            <button onClick={() => count(2)}>Тиць+:{counter[2]}</button>
        </div>
    );
}

export default App;
