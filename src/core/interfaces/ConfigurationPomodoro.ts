export interface ConfigurationPomodoro {
    pomodoroSeconds: number;
    shortBreakSeconds: number;
    largeBreakSeconds: number;
    numberOfCycles: number;

    getPomodoroSeconds(): number;
    getShortBreakSeconds(): number;
    getLargeBreakSeconds(): number;
    getNumberOfCycles(): void;
    setPomodoroSeconds(seconds: number): void;
    setShortBreakSeconds(seconds: number): void;
    setLargeBreakSeconds(seconds: number): void;
    setNumberOfCycles(seconds: number): void;
}
