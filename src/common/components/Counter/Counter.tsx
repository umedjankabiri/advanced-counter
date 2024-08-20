import {FC} from 'react';
import 'components/Counter/counterStyles.css'
import {Button} from "components/Button/Button.tsx";
import {Display} from "components/Display/Display.tsx";
import {CounterProps} from "types/Counter/CounterProps.ts";

export const Counter: FC<CounterProps> = (props) => {
    const zeroValue = 0
    //const minusOne = -1


    // const [message, setMessage] = useState<string | null>(null)

    const onClickPlusHandler = () => {
        props.setCounter && props.setCounter(props.counter)
    }
    const onClickMinusHandler = () => {
        props.setCounter && props.setCounter(props.counter)
    }
    const onClickResetHandler = () => {
        props.setCounter && props.setCounter(props.counter)
    }

    const disabledPlus = !!props.error
    const disabledMinus = !!props.error
    const disabledReset = !!props.error

    return (
        <div className={"counterWrapper"}>
            {/* ----------------------------------------- Counter layout -------------------------------------- */}
            { !!props.error
                ? <span className={"error"}>{props.error}</span>
                : <Display className={props.counter !== zeroValue && props.maxValue == props.counter ? "lastDigit" : "notError"}
                     showCounter={props.counter}/>
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