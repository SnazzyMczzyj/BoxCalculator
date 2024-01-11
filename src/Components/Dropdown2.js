import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.modules.css";



const Dropdowns = () => {

    const container = useRef();


    const [dropdownState, setDropdownState] = useState({open: false});
    const handleDropdownClick = () => setDropdownState({ open: !dropdownState.open });
    const [firstNumState, setFirstNumState] = useState(0);
    const firstNum = (selectedOption, setFirstNumState, bedrooms) => setFirstNumState(bedrooms[selectedOption]);


    const [dropdownState2, setDropdownState2] = useState({open: false});
    const handleDropdownClick2 = () => setDropdownState2({ open: !dropdownState2.open });
    const [secondNumState, setSecondNumState] = useState(0);
    const secondNum = (selectedOption, setFirstNumState, sqft) => setFirstNumState(sqft[selectedOption]);



    const [dropdownState3, setDropdownState3] = useState({open: false});
    const handleDropdownClick3 = () => setDropdownState3({ open: !dropdownState3.open });
    const [thirdNumState, setThirdNumState] = useState(0);
    const thirdNum = (selectedOption, setFirstNumState, collector) => setFirstNumState(collector[selectedOption]);



    const [buttonValueState, setButtonValueState] = useState("Select");
    const buttonValue = (selectedOption) => setButtonValueState(selectedOption);



//////////////
    const handleOptionClick = (selectedOption) => setDropdownState({ open: false, selectedOption });
    const handleListClick = (selectedOption) => {
        buttonValue (selectedOption);
        handleOptionClick(selectedOption);
        firstNum(selectedOption, setFirstNumState, bedrooms);
        calculator(firstNumState, secondNumState, thirdNumState);
    };

    const handleOptionClick2 = (selectedOption) => setDropdownState2({ open: false, selectedOption });
    const handleListClick2 = (selectedOption) => {
        buttonValue (selectedOption);
        handleOptionClick2(selectedOption);
        handleClickOutside2(selectedOption);
        secondNum(selectedOption, setSecondNumState, sqft);
        calculator(firstNumState, secondNumState, thirdNumState);
    };

    const handleOptionClick3 = (selectedOption) => setDropdownState3({ open: false, selectedOption });
    const handleListClick3 = (selectedOption) => {
        buttonValue (selectedOption);
        handleOptionClick3(selectedOption);
        thirdNum(selectedOption, setThirdNumState, collector);
        calculator(firstNumState, secondNumState, thirdNumState);
    };
    
//////////////

    const bedrooms = {
        "1": 10,
        "2": 20,
        "3": 30,
        "4": 40,
        "5+": 50,
    }

    const sqft = {
        "0-600": 10, 
        "600-1,200": 20, 
        "1,200-1,800": 30, 
        "1,800-2,400": 40, 
        "2,400+": 50
    }

    const collector = {
        "Minimalist": -10, 
        "I'm not really either": 0, 
        "Collector": 10
    }
//////////////

    const handleClickOutside = (e) => {
        if (container.current && !container.current.contains(e.target)) {
        setDropdownState({ open: false });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);



    const handleClickOutside2 = (e) => {
        if (container.current && !container.current.contains(e.target)) {
        setDropdownState2({ open: false });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside2);
        return () => document.removeEventListener("mousedown", handleClickOutside2);
      }, []);



    const handleClickOutside3 = (e) => {
        if (container.current && !container.current.contains(e.target)) {
        setDropdownState3({ open: false });
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside3);
        return () => document.removeEventListener("mousedown", handleClickOutside3);
      }, []);

    
/////////////////

    const [calcState, setCalcState] = useState(0);
    const calculator = (firstNumState, secondNumState, thirdNumState) => {
        setCalcState(Number(firstNumState) + Number(secondNumState) + Number(thirdNumState));
    }

    useEffect(() => {
        calculator(firstNumState, secondNumState, thirdNumState);
      }, [firstNumState, secondNumState, thirdNumState]);


/////////////////


    return (
        <div className="container">


            <button type="button" className="button" onClick={handleDropdownClick}>
            Bedrooms / 1
            </button>
            {dropdownState.open && (
            <div className="dropdown">
                <ul>
                    <li onClick={() => handleListClick(Object.keys(bedrooms)[0])}>{Object.keys(bedrooms)[0]}</li>
                    <li onClick={() => handleListClick(Object.keys(bedrooms)[1])}>{Object.keys(bedrooms)[1]}</li>
                    <li onClick={() => handleListClick(Object.keys(bedrooms)[2])}>{Object.keys(bedrooms)[2]}</li>
                    <li onClick={() => handleListClick(Object.keys(bedrooms)[3])}>{Object.keys(bedrooms)[3]}</li>
                    <li onClick={() => handleListClick(Object.keys(bedrooms)[4])}>{Object.keys(bedrooms)[4]}</li>
                </ul>
            </div>
            )}



            <button type="button" className="button" onClick={handleDropdownClick2}>
            sqft / 2
            </button>
            {dropdownState2.open && (
            <div className="dropdown">
                <ul>
                    <li onClick={() => handleListClick2(Object.keys(sqft)[0])}>{Object.keys(sqft)[0]}</li>
                    <li onClick={() => handleListClick2(Object.keys(sqft)[1])}>{Object.keys(sqft)[1]}</li>
                    <li onClick={() => handleListClick2(Object.keys(sqft)[2])}>{Object.keys(sqft)[2]}</li>
                    <li onClick={() => handleListClick2(Object.keys(sqft)[3])}>{Object.keys(sqft)[3]}</li>
                    <li onClick={() => handleListClick2(Object.keys(sqft)[4])}>{Object.keys(sqft)[4]}</li>
                </ul>
            </div>
            )}



            <button type="button" className="button" onClick={handleDropdownClick3}>
            Minimalist / 3
            </button>
            {dropdownState3.open && (
            <div className="dropdown">
                <ul>
                    <li onClick={() => handleListClick3(Object.keys(collector)[0])}>{Object.keys(collector)[0]}</li>
                    <li onClick={() => handleListClick3(Object.keys(collector)[1])}>{Object.keys(collector)[1]}</li>
                    <li onClick={() => handleListClick3(Object.keys(collector)[2])}>{Object.keys(collector)[2]}</li>
                </ul>
            </div>
            )}

            <div className="total">
                You would do well with {calcState} boxes.
            </div>

        </div>
    );

}

export default Dropdowns;