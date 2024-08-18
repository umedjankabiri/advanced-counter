import {FC} from "react";
import {DisplayProps} from "types/Display/DisplayProps.ts";

export const Display: FC<DisplayProps> = (props) => {
    return (
        <h1 className={props.className}>{props.show}</h1>
    );
};