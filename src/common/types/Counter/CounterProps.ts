export type CounterProps = {
    startValue: number;
    maxValue: number;
    error: string | null
    onClickEnter?: (setCounter: (counter: number) => void) => void
}