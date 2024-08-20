import {ChangeEvent} from "react";

export type SettingsProps = {
    startValue: number;
    maxValue: number;
    error: string | null
    onChangeStart?: (event: ChangeEvent<HTMLInputElement>) => void
    onChangeMax?: (event: ChangeEvent<HTMLInputElement>) => void
    onClickEnter?: () => void
    onClickClear?: () => void
}