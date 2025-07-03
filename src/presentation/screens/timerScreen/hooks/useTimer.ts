import { useEffect, useRef, useState } from "react";

interface Props {
    InitialMinutes?: number;
    InitialSeconds?: number;
    timerStatus: string;
    isRunning: boolean;
    handleFinishedBlock: () => void
}
export const UseTimer = ({
    InitialMinutes = 0,
    InitialSeconds = 0,
    timerStatus,
    isRunning,
    handleFinishedBlock
}: Props) => {
    const [minutes, setMinutes] = useState(InitialMinutes);
    const [seconds, setSeconds] = useState(InitialSeconds);
    const refSeconds = useRef(InitialSeconds);
    const refMinutes = useRef(InitialMinutes);

    const handleTimerSetter = () => {
        if ((refMinutes.current <= 0 && refSeconds.current <= 0) && isRunning) {
            handleFinishedBlock()
            return
        }
        if (!isRunning || (refMinutes.current <= 0 && refSeconds.current <= 0)) return;
        if (refSeconds.current === 0) {
            refMinutes.current = refMinutes.current - 1;
            refSeconds.current = 60;
            setMinutes(refMinutes.current);
        }
        refSeconds.current = refSeconds.current - 1;
        setSeconds(refSeconds.current);
    };

    useEffect(() => {
        let intervalId: any;
        intervalId = setInterval(() => {
            handleTimerSetter();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        if (["start", "pause"].includes(timerStatus)) return;
        refMinutes.current = InitialMinutes;
        refSeconds.current = InitialSeconds;
        setMinutes(InitialMinutes);
        setSeconds(InitialSeconds);
    }, [InitialMinutes, InitialSeconds, timerStatus]);

    return { minutes, seconds }
}
