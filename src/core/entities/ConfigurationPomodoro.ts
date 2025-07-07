import type { ConfigurationPomodoroInterface } from '../interfaces';

export class ConfigurationPomodoro implements ConfigurationPomodoroInterface {
    pomodoroSeconds: number = 1500;
    shortBreakSeconds: number = 300;
    largeBreakSeconds: number = 900;
    numberOfCycles: number = 4;

    getPomodoroSeconds(): number {
        throw new Error('Method not implemented.');
    }
    getShortBreakSeconds(): number {
        throw new Error('Method not implemented.');
    }
    getLargeBreakSeconds(): number {
        throw new Error('Method not implemented.');
    }
    getNumberOfCycles(): void {
        throw new Error('Method not implemented.');
    }
    setPomodoroSeconds(seconds: number): void {
        throw new Error(`Method not implemented. ${seconds}`);
    }
    setShortBreakSeconds(seconds: number): void {
        throw new Error(`Method not implemented. ${seconds}`);
    }
    setLargeBreakSeconds(seconds: number): void {
        throw new Error(`Method not implemented. ${seconds}`);
    }
    setNumberOfCycles(seconds: number): void {
        throw new Error(`Method not implemented. ${seconds}`);
    }
}
