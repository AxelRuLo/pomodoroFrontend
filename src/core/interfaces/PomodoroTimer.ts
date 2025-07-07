import type { ConfigurationPomodoro, Timer } from "."
import type { PomodoroStates } from "../types"

export interface PomodoroTimer {

    pomodoroState: PomodoroStates;
    timer: Timer;
    configurationSettings: ConfigurationPomodoro;
    actualCycle: number;
    isRinging: boolean;

    startTimer(): void
    stopTimer(): void
    resetTimer(): void
    skipState(): void
    finishCycle(): void
    getPomodoroState(): PomodoroStates
    getTimer(): Timer
    getConfigurationSettings(): ConfigurationPomodoro
    getActualCycle(): number
    getIsRinging(): boolean
    setPomodoroState(StateValue: PomodoroStates): void
    setTimer(Timer: Timer): void
    setConfigurationSettings(setting: ConfigurationPomodoro): void
    setActualCycle(actualCycle: number): void
    setIsRinging(newValue: boolean): void
}