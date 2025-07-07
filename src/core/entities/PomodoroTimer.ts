import { ConfigurationPomodoro, Timer } from './index';
import type { PomodoroTimerInterface } from '../interfaces';
import type { PomodoroStates } from '../types';

export class PomodoroTimer implements PomodoroTimerInterface {
    pomodoroState: PomodoroStates = 'pomodoro';
    timer: Timer = new Timer();
    configurationSettings: ConfigurationPomodoro = new ConfigurationPomodoro();
    actualCycle: number = 0;
    isRinging: boolean = false;

    startTimer(): void {
        throw new Error('Method not implemented.');
    }
    stopTimer(): void {
        throw new Error('Method not implemented.');
    }
    resetTimer(): void {
        throw new Error('Method not implemented.');
    }
    skipState(): void {
        throw new Error('Method not implemented.');
    }
    finishCycle(): void {
        throw new Error('Method not implemented.');
    }
    getPomodoroState(): PomodoroStates {
        throw new Error('Method not implemented.');
    }
    getTimer(): Timer {
        throw new Error('Method not implemented.');
    }
    getConfigurationSettings(): ConfigurationPomodoro {
        throw new Error('Method not implemented.');
    }
    getActualCycle(): number {
        throw new Error('Method not implemented.');
    }
    getIsRinging(): boolean {
        throw new Error('Method not implemented.');
    }
    setPomodoroState(StateValue: PomodoroStates): void {
        throw new Error(`Method not implemented. ${StateValue}`);
    }
    setTimer(timer: Timer): void {
        throw new Error(`Method not implemented. ${timer}`);
    }
    setConfigurationSettings(setting: ConfigurationPomodoro): void {
        throw new Error(`Method not implemented. ${setting}`);
    }
    setActualCycle(actualCycle: number): void {
        throw new Error(`Method not implemented. ${actualCycle}`);
    }
    setIsRinging(newValue: boolean): void {
        throw new Error(`Method not implemented. ${newValue}`);
    }
}
