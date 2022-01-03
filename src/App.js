import './App.css';
import {createRef} from "react";


function App() {

  let login = createRef();
  let password = createRef();

  function onSubmit(e) {
    console.log(login.current.value);
    console.log(password.current.value);
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={'login'} ref={login} placeholder={'login'}/>
        <input type="text" name={'password'} ref={password} placeholder={'password'}/>
        <button>click me</button>
      </form>
    </div>
  );
}

export default App;
