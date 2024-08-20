import {FC} from 'react';
import 'components/Counter/counterStyles.css'
import {Button} from "components/Button/Button.tsx";
import {Display} from "components/Display/Display.tsx";
import {CounterProps} from "types/Counter/CounterProps.ts";

export const Counter: FC<CounterProps> = (props) => {
    const zeroValue = 0
    const {
        counter, startValue,
        maxValue, error,
        message, setCounter,
        isActive} = props

    const onClickPlusHandler = () => {
        setCounter && setCounter(counter + 1)
    }
    const onClickMinusHandler = () => {
        setCounter && setCounter(counter - 1)
    }
    const onClickResetHandler = () => {
        setCounter && setCounter(startValue)
    }

    const disabledPlus = !!error || counter == maxValue || !isActive
    const disabledMinus = !!error || counter == startValue || !isActive
    const disabledReset = !!error || counter == startValue || !isActive

    return (
        <div className={"counterWrapper"}>
            {/* ----------------------------------------- Counter layout -------------------------------------- */}
            {!!error || !!message
                ? <span className={!!error ? "error" : "message"}>{error || message}</span>
                : <Display className={counter !== zeroValue && maxValue == counter ? "lastDigit" : "notError"}
                           showCounter={counter}/>
            }
            <div className={"displayButtonsWrapper"}>
                <Button className={"plus"}
                        disabled={disabledPlus}
                        onClick={onClickPlusHandler}
                >Plus</Button>
                <Button className={"minus"}
                        disabled={disabledMinus}
                        onClick={onClickMinusHandler}
                >Minus</Button>
                <Button className={"zero"}
                        disabled={disabledReset}
                        onClick={onClickResetHandler}
                >Reset</Button>
            </div>
            {/* ----------------------------------------------------------------------------------------------- */}
        </div>
    );
};