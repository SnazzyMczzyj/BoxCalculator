// Calculator.js

import React from "react";

const Calculator = ({ values }) => {
  // Calculate the sum of values
  const totalSum = values.reduce((sum, value) => sum + value, 0);

  return (
    <div className="calculatorresult">
      <p>Total Sum: {totalSum}</p>
    </div>
  );
};

export default Calculator;
