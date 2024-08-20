import {ChangeEvent} from "react";

export type EnterValueProps = {
    className?: string;
    value: number;
    min: number
    max?: number
    disabled?: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}