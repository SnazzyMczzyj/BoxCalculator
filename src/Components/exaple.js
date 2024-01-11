import React, { useState, useRef, useEffect } from "react";
import Calculator from "./Calculator";
import styles from "./Dropdown.modules.css";

const Dropdown = (props) => {
  const container = useRef();
  const { prop1, prop2, prop3, prop4, prop5 } = props;
  const [dropdownState, setDropdownState] = useState({ open: false });
  const [selectedOption, setSelectedOption] = useState(""); // Define selectedOption here
  const [calculatorResult, setCalculatorResult] = useState(0);
  const [selectionResult, setSelectionResult] = useState(0);

  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };

  const handleOptionClick = (selectedOption) => {
    setDropdownState({ open: false });
    setSelectedOption(selectedOption); // Set selectedOption when an option is clicked
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    setSelectionResult(selectedValue);

    const result = calculateResult(selectedValue);
    setCalculatorResult(result);
  };

  const calculateResult = (selectedValue) => {
    switch (selectedValue) {
      case "option1":
        return 10;
      case "option2":
        return 20;
      case "option3":
        return 30;
      default:
        return 0;
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <div className="container" ref={container}>
        <div className="container">
          <button type="button" className="button">
            {selectedOption}
          </button>
          <div className="dropdown">
            <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="calculatorresult">
        <p>Calculator Result: {calculatorResult}</p>
      </div>
    </div>
  );
};


































import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.modules.css";
import Calculator from "./Calculator";

const Dropdown = (props) => {
    const container = useRef();
    const { prop1, prop2, prop3, prop4, prop5 } = props;
    const [dropdownState, setDropdownState] = useState({
      open: false,
      selectedOption: "", // Add selectedOption property
    });

    const [selectedOption, setSelectedOption] = useState(""); // Define selectedOption here
    const [calculatorResult, setCalculatorResult] = useState(0);
    const [selectionResult, setSelectionResult] = useState(0);
  
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
  
    const handleClickOutside = (e) => {
      if (container.current && !container.current.contains(e.target)) {
        setDropdownState({ open: false });
      }
    };
  
    const handleOptionClick = (selectedOption) => {
      setDropdownState({ open: false, selectedOption }); // Set selectedOption
    };
  
    const handleDropdownChange = (event) => {
      const selectedValue = event.target.value;
      console.log("Selected Value:", selectedValue);
  
      setSelectionResult(selectedValue);
  
      const result = calculateResult(selectedValue);
      console.log("Result:", result);

      setCalculatorResult(result);
    };
  
    const calculateResult = (selectedValue) => {
      switch (selectedValue) {
        case "Option1":
          return 10;
        case "Option2":
          return 20;
        case "Option3":
          return 30;
        default:
          return 0;
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    return (
      <div>
        <div className="container" ref={container}>
          <div className="container">
            <button type="button" className="button" onClick={handleDropdownClick}>
              {dropdownState.selectedOption || "Select"}
            </button>
            {dropdownState.open && (
              <div className="dropdown">
                <select value={selectedOption} onChange={handleDropdownChange}></select>

                
                  {prop1 !== undefined && prop1 !== null && prop1 !== "" && (
                    <li onClick={() => handleOptionClick(prop1)}>{prop1}</li>
                  )}


                  {prop2 !== undefined && prop2 !== null && prop2 !== "" && (
                    <li onClick={() => handleOptionClick(prop2)}>{prop2}</li>
                  )}


                  {prop3 !== undefined && prop3 !== null && prop3 !== "" && (
                    <li onClick={() => handleOptionClick(prop3)}>{prop3}</li>
                  )}


                  {prop4 !== undefined && prop4 !== null && prop4 !== "" && (
                    <li onClick={() => handleOptionClick(prop4)}>{prop4}</li>
                  )}


                  {prop5 !== undefined && prop5 !== null && prop5 !== "" && (
                    <li onClick={() => handleOptionClick(prop5)}>{prop5}</li>
                  )}


              </div>
            )}
          </div>
          <div className="calculatorresult">
            <p>Calculator Result: {calculatorResult}</p>
          </div>
        </div>
      </div>
    );
  };

  




































  import React, { useState, useRef, useEffect } from "react";
import Calculator from "./Calculator";
import styles from "./Dropdown.modules.css";

const Dropdown = (props) => {
  const container = useRef();
  const { prop1, prop2, prop3, prop4, prop5 } = props;
  const [dropdownState, setDropdownState] = useState({ open: false });
  const [selectedOption, setSelectedOption] = useState(""); // Define selectedOption here
  const [calculatorResult, setCalculatorResult] = useState(0);
  const [selectionResult, setSelectionResult] = useState(0);

  const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setDropdownState({ open: false });
    }
  };

  const handleOptionClick = (selectedOption) => {
    setDropdownState({ open: false });
    setSelectedOption(selectedOption); // Set selectedOption when an option is clicked
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;

    setSelectionResult(selectedValue);

    const result = calculateResult(selectedValue);
    setCalculatorResult(result);
  };

  const calculateResult = (selectedValue) => {

    switch (selectedValue) {
      case "option1":
        return 10;
      case "option2":
        return 20;
      case "option3":
        return 30;
      case "option4":
        return 40;
      case "option5":
        return 50;
      default:
        return 0;
    }
  };


  



  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      
        <div className="container" ref={container}>
          <button type="button" className="button">
            {selectedOption}
          </button>
          <div className="dropdown">
            <select value={selectedOption} onChange={handleDropdownChange}>

                {prop1 !== undefined && prop1 !== null && prop1 !== "" && (
                            <option value="option1">{prop1}</option>
                            )}

                {prop2 !== undefined && prop2 !== null && prop2 !== "" && (
                            <option value="option2">{prop2}</option>
                            )}

                {prop3 !== undefined && prop3 !== null && prop4 !== "" && (
                            <option value="option3">{prop3}</option>
                            )}

                {prop4 !== undefined && prop4 !== null && prop4 !== "" && (
                            <option value="option4">{prop4}</option>
                            )}

                {prop5 !== undefined && prop5 !== null && prop5 !== "" && (
                            <option value="option5">{prop5}</option>
                            )}

            </select>
          </div>
       
      </div>

      <div className="calculatorresult">
        <p>Calculator Result: {calculatorResult}</p>
      </div>
      
    </div>
  );
};




















import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.modules.css";
import Calculator from "./Components/Calculator";

const Dropdown = (props) => {
    const container = useRef();
    const { prop1, prop2, prop3, prop4, prop5 } = props;
    const [dropdownState, setDropdownState] = useState({
      open: false,
      selectedOption: "" // Add selectedOption property
    });

    const [selectedOption, setSelectedOption] = useState(""); // Define selectedOption here
    const [calculatorResult, setCalculatorResult] = useState(0);
    const [selectionResult, setSelectionResult] = useState(0);
  
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
  
    const handleClickOutside = (e) => {
      if (container.current && !container.current.contains(e.target)) {
        setDropdownState({ open: false });
      }
    };
  
    const handleOptionClick = (selectedOption) => {
      setDropdownState({ open: false, selectedOption }); // Set selectedOption
    };
  
    const handleDropdownChange = (event) => {
      const selectedValue = event.target.value;
      console.log("Selected Value:", selectedValue);
  
      setSelectionResult(selectedValue);
  

  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
  
    return (
      <div>
        <div className="container" ref={container}>
          <div className="container">
            <button type="button" className="button" onClick={handleDropdownClick}>
              {dropdownState.selectedOption || "Select"}
            </button>
            {dropdownState.open && (
              <div className="dropdown">
                <select value={selectedOption} onChange={handleDropdownChange}></select>

                
                  {prop1 !== undefined && prop1 !== null && prop1 !== "" && (
                    <li onClick={() => handleOptionClick(prop1)}>{prop1}</li>
                  )}


                  {prop2 !== undefined && prop2 !== null && prop2 !== "" && (
                    <li onClick={() => handleOptionClick(prop2)}>{prop2}</li>
                  )}


                  {prop3 !== undefined && prop3 !== null && prop3 !== "" && (
                    <li onClick={() => handleOptionClick(prop3)}>{prop3}</li>
                  )}


                  {prop4 !== undefined && prop4 !== null && prop4 !== "" && (
                    <li onClick={() => handleOptionClick(prop4)}>{prop4}</li>
                  )}


                  {prop5 !== undefined && prop5 !== null && prop5 !== "" && (
                    <li onClick={() => handleOptionClick(prop5)}>{prop5}</li>
                  )}


              </div>
            )}
          </div>
          <div className="calculatorresult">
            <p>Calculator Result: {calculatorResult}</p>
          </div>
        </div>
      </div>
    );
  };
  
