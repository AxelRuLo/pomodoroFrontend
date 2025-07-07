import type { ConfigurationPomodoroInterface, TimerInterface } from '.';
import type { PomodoroStates } from '../types';

export interface PomodoroTimerInterface {
    pomodoroState: PomodoroStates;
    timer: TimerInterface;
    configurationSettings: ConfigurationPomodoroInterface;
    actualCycle: number;
    isRinging: boolean;

    startTimer(): void;
    stopTimer(): void;
    resetTimer(): void;
    skipState(): void;
    finishCycle(): void;
    getPomodoroState(): PomodoroStates;
    getTimer(): TimerInterface;
    getConfigurationSettings(): ConfigurationPomodoroInterface;
    getActualCycle(): number;
    getIsRinging(): boolean;
    setPomodoroState(StateValue: PomodoroStates): void;
    setTimer(timer: TimerInterface): void;
    setConfigurationSettings(setting: ConfigurationPomodoroInterface): void;
    setActualCycle(actualCycle: number): void;
    setIsRinging(newValue: boolean): void;
}
