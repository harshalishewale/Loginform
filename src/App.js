import { useState } from "react";
import Form from "./component/Form";
import Submit from "./component/Submit";


function App() {
  const [name,setname]=useState("");
  const [password,setpassword]=useState("");
  const [login,setlogin]=useState(false);
  return (
    <div className="App">
      {
        login? <Submit setlogin={setlogin} name={name} password={password}/>
        :
        <Form setlogin={setlogin} setname={setname} setpassword={setpassword} />
      }
    </div>
  );
}

export default App;
