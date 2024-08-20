import {EnterValue} from "components/EnterValue/EnterValue.tsx";
import {Button} from "components/Button/Button.tsx";
import {ChangeEvent, FC} from "react";
import {SettingsProps} from "types/Settings/SettingsProps.ts";

export const Settings: FC<SettingsProps> = (props) => {
    const zeroValue = 0;
    const minusOne = -1;

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMax && props.onChangeMax(event)
    }
    const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStart && props.onChangeStart(event)
    }
    const onClickClearHandler = () => {
        props.onClickClear && props.onClickClear()
    }
    const onClickEnterHandler = () => {
        props.onClickEnter && props.onClickEnter()
    }

    const disabledEnter = !!props.error
        || props.maxValue == zeroValue
        && props.startValue == zeroValue
    const disabledClear = props.maxValue === zeroValue && props.startValue === zeroValue
    const disabledMaxValue = props.maxValue === minusOne
    const disabledMinValue = props.startValue === minusOne || props.startValue > props.maxValue

    return (
        <div className={"settingsWrapper"}>
            {/* ----------------------------------------- Settings layout --------------------------------------- */}
            <div className={"displaySettings"}>
                <div className={"maxValue"}>
                    <span className={""}>Enter max value: </span>
                    <EnterValue className={!!props.error ? "enterMaxValueError" : "enterMaxValue"}
                                value={props.maxValue}
                                onChange={onChangeMax}
                                min={minusOne}
                                disabled={disabledMaxValue}
                    />
                </div>
                <div className={"startValue"}>
                    <span className={""}>Enter start value: </span>
                    <EnterValue className={!!props.error ? "inputStartValueError" : "inputStartValue"}
                                value={props.startValue}
                                onChange={onChangeStart}
                                min={minusOne}
                                disabled={disabledMinValue}
                    />
                </div>
            </div>
            <div className={"settingButtonsWrapper"}>
                <Button className={"enterButton"}
                        disabled={disabledEnter}
                        onClick={onClickEnterHandler}
                >Enter</Button>
                <Button className={"clearButton"}
                        disabled={disabledClear}
                        onClick={onClickClearHandler}
                >Clear</Button>
            </div>
            {/* ----------------------------------------------------------------------------------------------- */}
        </div>
    );
};