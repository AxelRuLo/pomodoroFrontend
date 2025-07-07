import type { TimerInterface } from '../interfaces';
import type { TimerState } from '../types';

export class Timer implements TimerInterface {
    seconds: number = 1500;
    state: TimerState = 'pause';

    startTimer(): void {
        throw new Error('Method not implemented.');
    }
    pauseTimer(): void {
        throw new Error('Method not implemented.');
    }
    resetTimer(): void {
        throw new Error('Method not implemented.');
    }
    getFormattedTime(): number[] {
        throw new Error('Method not implemented.');
    }
    getSeconds(): number {
        throw new Error('Method not implemented.');
    }
    getState(): TimerState {
        throw new Error('Method not implemented.');
    }
    setSeconds(seconds: number): void {
        throw new Error(`Method not implemented.${seconds}`);
    }
    setState(state: TimerState): void {
        throw new Error(`Method not implemented.${state}`);
    }
}
