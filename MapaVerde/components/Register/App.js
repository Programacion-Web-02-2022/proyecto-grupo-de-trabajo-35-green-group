import React, { useState } from "react";

import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
 {/*Esta funcion es para hacer funcionar el login */}
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;