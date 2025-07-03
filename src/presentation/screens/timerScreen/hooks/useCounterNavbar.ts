import { useState } from "react";
interface TimerValues {
    minutes: number;
    seconds: number;
}


export const useCounterNavbar = () => {

    type TimerType = "pomodoro" | "shortBreak" | "longBreak";
    const [pomodoroState, setPomodoroState] = useState<TimerType>("pomodoro");

    const handlePomodoroStage = (type: TimerType) => {
        setPomodoroState(type);
    };

    const handleNextState = () => {
        const dictNewState: Record<TimerType, TimerType> = {
            pomodoro: "shortBreak",
            shortBreak: "longBreak",
            longBreak: "pomodoro"
        }
        const nextState: TimerType = dictNewState[pomodoroState]
        setPomodoroState(nextState)
    }


    return { pomodoroState,  handlePomodoroStage, handleNextState }
}
