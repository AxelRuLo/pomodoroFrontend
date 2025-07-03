import { useState } from "react";
import { transformMinutesToSeconds, transformSecondsToMinutesSeconds } from "../../../../utils/timeUtils";

type StatusTimer = "start" | "pause" | "skip" | "reset";
type TimerType = "pomodoro" | "shortBreak" | "longBreak";

interface TimerValues {
    minutes: number;
    seconds: number;
}


export const useCounter = () => {
    const [shortBreakSeconds, setShortBreakSeconds] = useState(300);
    const [longBreakSeconds, setLongBreakSeconds] = useState(900);
    const [pomodoroSeconds, setPomodoroSeconds] = useState(1500);
    const [timerStatus, setTimerStatus] = useState<StatusTimer>("start");
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [timeCounterValues, setTimeCounterValues] = useState<TimerValues>({
        minutes: 25,
        seconds: 0,
    });

    const handleSkipButton = () => {
        setTimerStatus("skip");
        setIsTimerRunning(false);
    };

    const handleStartPauseButton = () => {
        const isRunning: boolean = ["pause", "skip", "reset"].includes(
            timerStatus
        );
        setTimerStatus(isRunning ? "start" : "pause");
        setIsTimerRunning((prev) => !prev);
    };

    const resetTimer = (pomodoroState: TimerType) => {
        setIsTimerRunning(false);
        const stateValuesDictionary = {
            pomodoro: pomodoroSeconds,
            shortBreak: shortBreakSeconds,
            longBreak: longBreakSeconds,
        }
        const newTimerValue = transformSecondsToMinutesSeconds(stateValuesDictionary[pomodoroState])

        setTimeCounterValues(newTimerValue)
    }
    const handleResetButton = (pomodoroState: TimerType) => {
        setTimerStatus("reset");
        resetTimer(pomodoroState)
    };

    const setConfigTimer = (pomodoroState: TimerType, minutes: number, seconds: number) => {
        const setterDictionary = {
            pomodoro: setPomodoroSeconds,
            shortBreak: setShortBreakSeconds,
            longBreak: setLongBreakSeconds,
        }
        const setter: any = setterDictionary[pomodoroState]
        const newValueInSeconds = transformMinutesToSeconds(minutes, seconds)
        setter(newValueInSeconds);
    }


    return {
        shortBreakSeconds, setShortBreakSeconds,
        longBreakSeconds, setLongBreakSeconds,
        pomodoroSeconds, setPomodoroSeconds,
        timeCounterValues, setTimeCounterValues,
        timerStatus, setTimerStatus,
        isTimerRunning,
        setIsTimerRunning,
        handleStartPauseButton,
        handleSkipButton,
        handleResetButton,
        resetTimer,
        setConfigTimer,
    }
}
