import {EnterValue} from "components/EnterValue/EnterValue.tsx";
import {Button} from "components/Button/Button.tsx";
import {ChangeEvent, FC} from "react";
import {SettingsProps} from "types/Settings/SettingsProps.ts";

export const Settings: FC<SettingsProps> = (props) => {
    const {startValue, maxValue,
        error, onChangeStart,
        onChangeMax, onClickEnter,
        onClickClear} = props
    const zeroValue = 0;
    const minusOne = -1;

    const onChangeMaxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeMax && onChangeMax(event)
    }
    const onChangeStartHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChangeStart && onChangeStart(event)
    }
    const onClickClearHandler = () => {
        onClickClear && onClickClear()
    }
    const onClickEnterHandler = () => {
        onClickEnter && onClickEnter()
    }

    const disabledEnter = !!error
        || maxValue == zeroValue
        && startValue == zeroValue
    const disabledClear = maxValue === zeroValue && startValue === zeroValue
    const disabledMaxValue = maxValue === minusOne || maxValue < startValue
    const disabledMinValue = startValue === minusOne || startValue > maxValue

    return (
        <div className={"settingsWrapper"}>
            {/* ----------------------------------------- Settings layout --------------------------------------- */}
            <div className={"displaySettings"}>
                <div className={"maxValue"}>
                    <span className={""}>Enter max value: </span>
                    <EnterValue className={!!error ? "enterMaxValueError" : "enterMaxValue"}
                                value={maxValue}
                                onChange={onChangeMaxHandler}
                                min={minusOne}
                                disabled={disabledMaxValue}
                    />
                </div>
                <div className={"startValue"}>
                    <span className={""}>Enter start value: </span>
                    <EnterValue className={!!error ? "inputStartValueError" : "inputStartValue"}
                                value={startValue}
                                onChange={onChangeStartHandler}
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