import './App.css';
import {useState} from "react";


function App() {

    let [formState, setFormState]= useState({login: '', pasword: ``});

    function onSubmit(e) {
        console.log(e.target.login.value);
        console.log(e.target.pasword.value);
        e.preventDefault()
        console.log(formState);

    }
    
    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <input type="text" name={'login'} value={formState.login} onChange={onChange}/>
        <input type="text" name={'pasword'} value={formState.pasword} onChange={onChange}/>
        <button>click me</button>
      </form>

    </div>
  );
}

export default App;
