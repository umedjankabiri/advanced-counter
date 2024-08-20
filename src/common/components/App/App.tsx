import 'components/App/App.css'
import {Counter} from "components/Counter/Counter.tsx";
import {ChangeEvent, useState} from "react";
import {Settings} from "components/Settings.tsx";

function App() {
    const zeroValue = 0;
    const minusOne = -1;

    const [maxValue, setMaxValue] = useState<number>(zeroValue)
    const [startValue, setStartValue] = useState<number>(zeroValue)
    const [counter, setCounter] = useState<number>(zeroValue)
    const [error, setError] = useState<string | null>(null)

    const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempMaxValue = +event.currentTarget.value
        if (tempMaxValue == minusOne)
            setError(`max value cannot be less then ${zeroValue}`)
        else
            setError(null)
        setMaxValue(tempMaxValue)
    }
    const onChangeStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const tempStartValue = +event.currentTarget.value
        if (tempStartValue == minusOne)
            setError(`start value cannot be less then ${zeroValue}`)
        else if (tempStartValue == maxValue)
            setError(`start value cannot be equal to maxValue`)
        else if (tempStartValue > maxValue)
            setError(`start value cannot be biggest then ${maxValue}`)
        else
            setError(null)
        setStartValue(tempStartValue)
    }
    const enterValues = () => {
        setCounter(startValue)
    }
    const clearValues = () => {
        setError(null)
        setStartValue(zeroValue)
        setMaxValue(zeroValue)
    }

    return (
        <div className={"mainWrapper"}>
            <Settings maxValue={maxValue}
                      startValue={startValue}
                      onChangeStart={onChangeStartValueHandler}
                      onChangeMax={onChangeMaxValueHandler}
                      onClickEnter={enterValues}
                      onClickClear={clearValues}
                      error={error}
            />
            <Counter maxValue={maxValue}
                     startValue={startValue}
                     counter={counter}
                     error={error}
                     setCounter={setCounter}
            />
        </div>
    )
}

export default App
