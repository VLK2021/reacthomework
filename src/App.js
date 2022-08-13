import './App.css';

import {useState} from "react";

function App() {
//варіант номер 1
    const [counter, setCounter] = useState([0, 0, 0]);

    return (
        <div>
            <div>
                <button onClick={() => setCounter([counter[0] + 1, counter[1], counter[2]])}>Тиць+:</button>
                {counter[0]}
                <button onClick={() => setCounter([counter[0] - 1, counter[1], counter[2]])}>Тиць-:</button>
            </div>

            <div>
                <button onClick={() => setCounter([counter[0], counter[1] + 1, counter[2]])}>Тиць+:</button>
                {counter[1]}
                <button onClick={() => setCounter([counter[0], counter[1] - 1, counter[2]])}>Тиць-:</button>
            </div>

            <div>
                <button onClick={() => setCounter([counter[0], counter[1], counter[2] + 1])}>Тиць+:</button>
                {counter[2]}
                <button onClick={() => setCounter([counter[0], counter[1], counter[2] - 1])}>Тиць-:</button>
            </div>
        </div>
    );

    //варіант номер 2

    // const [] = useState([]);
    // return (
    //     <div>
    //
    //     </div>
    // );
}

export default App;
