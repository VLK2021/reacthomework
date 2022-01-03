import './App.css';
import Car from "./component/component";

function App() {



    return (
        <div>
            <div>
                <Car model ={'Honda'} year ={"2006"} power={"1.8"}/>
            </div>

            <div>
                <Car model ={"Toyota"} year ={"2010"} power={"2.5"}/>
            </div>
        </div>
    );
}

export default App;
