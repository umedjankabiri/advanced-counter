import {EnterValueProps} from "types/EnterValue/EnterValueProps.ts";
import {FC} from "react";

export const EnterValue: FC<EnterValueProps> = (props) => {
    return (
        <input type="number"
               className={props.className}
               value={props.value}
               disabled={props.disabled}
               min={props.min}
               max={props.max}
               onChange={props.onChange}
        />
    );
};