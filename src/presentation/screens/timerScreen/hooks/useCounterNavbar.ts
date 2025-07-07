import { useState } from "react";

export const useCounterNavbar = () => {

    type TimerType = "pomodoro" | "shortBreak" | "longBreak";
    const [pomodoroState, setPomodoroState] = useState<TimerType>("pomodoro");
    const [isAlarmRinging, setIsAlarmRinging] = useState(false);
    const [workCycles, setWorkCycles] = useState<number>(4);
    const [currentWorkCycles, setCurrentWorkCycles] = useState<number>(1);


    const openModal = () => setIsAlarmRinging(true);

    const closeModal = () => setIsAlarmRinging(false);

    const handlePomodoroStage = (type: TimerType) => {
        setPomodoroState(type);
    };

    const handleNextState = () => {
        const dictNewState: Record<string, TimerType> = {
            pomodoro: "shortBreak",
            shortBreak: "pomodoro",
            longBreak: "pomodoro",
            finishedCycle: "longBreak"

        }
        if (pomodoroState === "shortBreak") setCurrentWorkCycles((prev) => prev + 1)
        if (workCycles == currentWorkCycles) {
            const nextState: TimerType = dictNewState["finishedCycle"]
            console.log(pomodoroState)
            setPomodoroState(nextState)
            setCurrentWorkCycles(1)
            return
        }
        const nextState: TimerType = dictNewState[pomodoroState]
        setPomodoroState(nextState)
    }


    return { pomodoroState, handlePomodoroStage, handleNextState, isAlarmRinging, openModal, closeModal }
}
