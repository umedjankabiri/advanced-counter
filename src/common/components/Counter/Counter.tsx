import {FC} from 'react';
import 'components/Counter/counterStyles.css'
import {Button} from "components/Button/Button.tsx";
import {Display} from "components/Display/Display.tsx";
import {CounterProps} from "types/Counter/CounterProps.ts";

export const Counter: FC<CounterProps> = ({counter, startValue, maxValue, error, setCounter}) => {
    const zeroValue = 0

    const onClickPlusHandler = () => {
        setCounter && setCounter(counter + 1)
    }
    const onClickMinusHandler = () => {
        setCounter && setCounter(counter - 1)
    }
    const onClickResetHandler = () => {
        setCounter && setCounter(startValue)
    }

    const disabledPlus = !!error || counter == maxValue
    const disabledMinus = !!error || counter == startValue
    const disabledReset = !!error || counter == startValue

    return (
        <div className={"counterWrapper"}>
            {/* ----------------------------------------- Counter layout -------------------------------------- */}
            { !!error
                ? <span className={"error"}>{error}</span>
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