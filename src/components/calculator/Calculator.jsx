import React, { useState } from "react";
import "./Calculator.css";
const buttonVals = [
  { key: "7", value: 7 },
  { key: "8", value: 8 },
  { key: "9", value: 9 },
  { key: "C", value: "C" },
  { key: "4", value: 4 },
  { key: "5", value: 5 },
  { key: "6", value: 6 },
  { key: "+", value: "+" },
  { key: "1", value: 1 },
  { key: "2", value: 2 },
  { key: "3", value: 3 },
  { key: "-", value: "-" },
  { key: "0", value: 0 },
  { key: "/", value: "/" },
  { key: "*", value: "*" },
  { key: "=", value: "=" },
];
const Calculator = () => {
  const [inputText, setInputText] = useState(0);
  const [mainValue, setMainValue] = useState(null);
  const handleBtnClick = (btnVal) => {
    switch (btnVal) {
      case "C":
        setInputText(0);
        setMainValue(null);
        break;
      case "=":
        try {
          const result = eval(inputText);
          setMainValue(result);
        } catch (error) {
          setInputText("Error");
          setMainValue(null);
        }
        break;
      default:
        if (!isNaN(btnVal)) {
          setInputText((prevInputText) =>
            prevInputText === 0 ? btnVal.toString() : prevInputText + btnVal
          );
        } else {
          setInputText((prevInputText) =>
            mainValue === null ? prevInputText + btnVal : mainValue + btnVal
          );
        }
    }
  };
  return (
    <>
      <h1 className="calci-header">Calculator</h1>
      <div className="calci-container">
        <div className="show-container">
          <p>{inputText}</p>
          <p>{mainValue}</p>
        </div>
        <hr />
        <div className="operations-container">
          {buttonVals.map((btn, index) => {
            return (
              <button onClick={() => handleBtnClick(btn.value)} key={index}>
                {btn.key}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Calculator;
