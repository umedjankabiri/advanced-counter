export type CounterProps = {
    startValue: number;
    maxValue: number;
    counter: number
    error: string | null
    setCounter?: (counter: number) => void
}