import "./App.css";
import React, { useState, useContext } from "react";
import AppContext from "./context/appContext";
import Main from "./components/main";

function App() {
  const [displayState, setDisplayState] = useState({ display: false });

  const text =
    "This webApp has the purpose of allowing users to listen to any song they have stored in their computer machines and vizualise the sound frequencies as well as equalize them.";

  useContext(AppContext);
  return (
    <AppContext.Provider value={{ displayState, setDisplayState }}>
      <div className="main-page">
        <Main text={text} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
