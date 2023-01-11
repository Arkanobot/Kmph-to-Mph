import "./App.css";
import React from "react";
import SpeedCalculator from "./components/speedcalculator.js";
import Card from "react-bootstrap/Card";

function App() {
  const initialState = {
    kms: 0,
    miles: 0,
  };

  const [speedObject, setSpeedObject] = React.useState(initialState);

  const onChangeKilometers = (speed) => {
    setSpeedObject({
      kms: speed,
      miles: speed * 0.621371,
    });
  };

  const onChangeMiles = (speed) => {
    setSpeedObject({
      kms: speed * 1.60934,
      miles: speed,
    });
  };

  return (
    <div className="App">
      <Card className="col-lg-6">
        <Card.Header className="bg-primary text-light">
          <h1>Distance Converter</h1>
        </Card.Header>
        <Card.Body>
          <SpeedCalculator
            type="Kilometers"
            value={speedObject.kms}
            callback={onChangeKilometers}
          />
          <SpeedCalculator
            type="Miles"
            value={speedObject.miles}
            callback={onChangeMiles}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
