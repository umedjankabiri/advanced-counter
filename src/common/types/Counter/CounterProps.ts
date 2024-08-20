export type CounterProps = {
    startValue: number;
    maxValue: number;
    counter: number
    message: string | null
    error: string | null
    isActive: boolean
    setCounter?: (counter: number) => void
}