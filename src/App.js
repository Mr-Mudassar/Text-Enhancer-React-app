import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //To check if dark mode is enable.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#0f0938";
      showAlert("Dark mode has been activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Enhanser" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={
              <About mode={mode}/>
            }/>
            <Route exact path="/" element={
              <TextForm
                showAlert={showAlert}
                heading="Try Text Enhancer to manipulate text" 
                mode={mode}
              />}/>
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
