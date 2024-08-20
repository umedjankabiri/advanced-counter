import 'components/App/App.css'
import {Counter} from "components/Counter/Counter.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import {Settings} from "components/Settings/Settings.tsx";

function App() {
    const zeroValue = 0;
    const minusOne = -1;
    const asStringMaxValue = localStorage.getItem('maxValue')
    const asStringStartValue = localStorage.getItem('startValue')
    const asStringCounterValue = localStorage.getItem('counter')
    const newMaxValue = asStringMaxValue ? JSON.parse(asStringMaxValue) : zeroValue;
    const newStartValue = asStringStartValue ? JSON.parse(asStringStartValue) : zeroValue;
    const newCounterValue = asStringCounterValue ? JSON.parse(asStringCounterValue) : zeroValue;

    const [maxValue, setMaxValue] = useState<number>(newMaxValue)
    const [startValue, setStartValue] = useState<number>(newStartValue)
    const [counter, setCounter] = useState<number>(newCounterValue)
    const [error, setError] = useState<string | null>(null)
    const [message, setMessage] = useState<string | null>(null)
    const [isActiveButton, setIsActiveButton] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('counter', JSON.stringify(counter))
    }, [maxValue, startValue, counter])

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempMaxValue = +event.currentTarget.value

        if (tempMaxValue) {
            setMessage(`input max value and press 'Enter'`)
            setIsActiveButton(false)
        }
        if (tempMaxValue == minusOne)
            setError(`max value cannot be less then ${zeroValue}`)
        else if (tempMaxValue == startValue)
            setError(`max value cannot be equal to start value`)
        else if (tempMaxValue < startValue)
            setError(`max value cannot be less then start value`)
        else if (startValue < zeroValue && tempMaxValue > zeroValue) {
            setError(null)
            setStartValue(zeroValue)
        } else
            setError(null)
        setMaxValue(tempMaxValue)
    }
    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempStartValue = +event.currentTarget.value

        if (tempStartValue) {
            setMessage("input start value and press 'Enter'")
            setIsActiveButton(false)
        }
        if (tempStartValue == minusOne)
            setError(`start value cannot be less then ${zeroValue}`)
        else if (tempStartValue == maxValue)
            setError(`start value cannot be equal to max value`)
        else if (tempStartValue > maxValue)
            setError(`start value cannot be greater then max value`)
        else
            setError(null)
        setStartValue(tempStartValue)
    }
    const enterValues = () => {
        setMessage(null)
        setCounter(startValue)
        setIsActiveButton(true)
    }
    const clearValues = () => {
        setError(null)
        setStartValue(zeroValue)
        setMaxValue(zeroValue)
        setCounter(zeroValue)
        localStorage.clear()
    }

    return (
        <div className={"mainWrapper"}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      error={error}
                      onChangeStart={onChangeStartValueHandler}
                      onChangeMax={onChangeMaxValueHandler}
                      onClickEnter={enterValues}
                      onClickClear={clearValues}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counter={counter}
                     message={message}
                     error={error}
                     isActive={isActiveButton}
                     setCounter={setCounter}
            />
        </div>
    )
}

export default App
