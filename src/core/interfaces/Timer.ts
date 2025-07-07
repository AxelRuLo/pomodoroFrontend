import type { TimerState } from '../types';

export interface Timer {
    seconds: number;
    state: TimerState;

    startTimer(): void;
    pauseTimer(): void;
    resetTimer(): void;
    getFormattedTime(): number[];
    getSeconds(): number;
    getState(): TimerState;
    setSeconds(seconds: number): void;
    setState(state: TimerState): void;
}
