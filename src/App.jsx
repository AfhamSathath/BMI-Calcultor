import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter a valid numeric value for height and weight.");
    }
  };

  const clearAll= ()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  };

  return (
    <div className="bmi-container">
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>

        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm)</label>
          <input  type="text" value={height} id="height" placeholder="Enter the height" onChange={(e) => setHeight(e.target.value)}/>
        </div>

        <div className="input-container">
          <label htmlFor="weight">Weight (Kg)</label>
          <input type="text" value={weight} id="weight" placeholder="Enter the weight" onChange={(e) => setWeight(e.target.value)}/>
        </div>
        

        
        <button onClick={calculateBmi}>Calculate BMI</button>
        <button onClick={clearAll}>Reset</button>
        {bmi !== null && (
          <div className="result">
            <p>Your BMI: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>
        )}
         
      </div>
    </div>
  );
}

export default App;
