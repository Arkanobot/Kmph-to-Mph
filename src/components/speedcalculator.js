import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const SpeedCalculator = (props) => {
  const onChangeHandler = (e) => {
    props.callback(e.target.value);
  };
  return (
    <div className="container">
      <InputGroup className="mb-3">
        <Form.Control
          onChange={onChangeHandler}
          placeholder={props.type}
          aria-label={props.type}
          aria-describedby="basic-addon2"
          value={props.value}
        />
        <InputGroup.Text id="basic-addon2">{props.type}</InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default SpeedCalculator;
