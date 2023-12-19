import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {
   const MINVALUE = 0;

   const counterString = localStorage.getItem('counter')
   const startValueString = localStorage.getItem('startValue')
   const maxValueString = localStorage.getItem('maxValue')
   const newMaxValue = maxValueString? JSON.parse(maxValueString): MINVALUE
   const newStartValue = startValueString ? JSON.parse(startValueString): MINVALUE
   const newCounterValue = counterString ? JSON.parse(counterString): MINVALUE

   const [maxValue, setMaxValue] = useState<number>(newMaxValue)
   const [startValue, setStartValue] = useState<number>(newStartValue)
   const [counter, setCounter] = useState(newCounterValue)
   const [error, setError] = useState<string | null>("")
   const [disablePlus, setDisablePlus] = useState<boolean>(true)

   useEffect(() => {
      localStorage.setItem('counter', JSON.stringify(counter))
      localStorage.setItem('startValue', JSON.stringify(startValue))
      localStorage.setItem('maxValue', JSON.stringify(maxValue))
   }, [counter, startValue, maxValue]);
   useEffect(() => {
      const disablePlusString = localStorage.getItem('disablePlus');
      const newDisablePlus = disablePlusString ? JSON.parse(disablePlusString) : true;
      if (newCounterValue === newMaxValue && disablePlus){
         localStorage.setItem('disablePlus', JSON.stringify(true))
      }
      else
         localStorage.setItem('disablePlus', JSON.stringify(false))
      setDisablePlus(newDisablePlus);
   }, []);
   const onChangeStartValue = (event: ChangeEvent<HTMLInputElement>) => {
      const tempStartValue = Number(event.currentTarget.value)
      if (tempStartValue < MINVALUE){
         setError("Incorrect value!")
      }
      else {
         setStartValue(tempStartValue)
         setError(null)
      }
   }
   const onChangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
      const tempMaxValue = Number(event.currentTarget.value)
      if (tempMaxValue < MINVALUE){
         setError("Incorrect value!")
      }
      else {
         setMaxValue(tempMaxValue)
         setError(null)
      }
   }
   const onClickEnter = () => {
      const tempMaxValue = maxValue
      const tempStartValue = startValue
      setMaxValue(tempMaxValue)
      if (tempMaxValue <= tempStartValue) {
         setError("Incorrect value!")
         setDisablePlus(true)
      } else {
         setError(null)
         setCounter(tempStartValue)
         setDisablePlus(false)
         localStorage.setItem('disablePlus', JSON.stringify(false))
      }
   }
   const ClearStartMaxValue = () => {
      localStorage.clear()
      setMaxValue(MINVALUE)
      setStartValue(MINVALUE)
      setCounter(MINVALUE)
      setError(null)
      setDisablePlus(true)
   }
   const onClickPlus = () => {
      let newCounter = counter + 1
      counter < maxValue && setCounter(newCounter)
      if (newCounter === maxValue)
         setDisablePlus(true)
   }
   const onClickMinus = () => {
      let newCounter = counter - 1
      counter > startValue && setCounter(newCounter)
      setDisablePlus(false)
   }

   const disableEnter = maxValue === MINVALUE || !!error
   const disableMinus = counter <= startValue
   const disableClear = counter <= startValue
   const disableStartMaxClear = maxValue === MINVALUE && startValue === MINVALUE
   const onClickClear = () => {
      setCounter(startValue);
   }

   return (
      <div className="App">
         <div className="main-wrapper">
            <div className="wrapper-set">
               <div className="inputs-wrapper">
                  <div className="inputs1">
                     <span>Max value: </span><Input value={maxValue}
                                                    onChange={onChangeMaxValue}
                                                    className={error ? "error-input" : ""}
                  />
                  </div>
                  <div className="inputs2">
                     <span>Start value: </span><Input value={startValue}
                                                      onChange={onChangeStartValue}
                                                      className={error ? "error-input" : ""}
                  />
                  </div>
               </div>
               <div className="buttons-set">
                  <Button name="Enter"
                          className="enter"
                          onClick={onClickEnter}
                          disabled={disableEnter}
                  />
                  <Button name="Clear"
                          className="clear"
                          onClick={ClearStartMaxValue}
                          disabled={disableStartMaxClear}
                  />
               </div>
            </div>
            <div className="wrapper-display">

               {!error ?
                  <div className="main-display">
                     <Display title={counter}
                              className={counter === maxValue ? "display" : ""}
                              error={error}
                     />
                  </div>
                  : <span className={"error-message"}>{error}</span>}
               <div className="buttons-display">
                  <Button name="Plus"
                          className="Plus"
                          onClick={onClickPlus}
                          disabled={disablePlus}/>
                  <Button name="Minus"
                          className="Minus"
                          onClick={onClickMinus}
                          disabled={disableMinus}/>
                  <Button name="Clear"
                          className="Plus"
                          onClick={onClickClear}
                          disabled={disableClear}/>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
