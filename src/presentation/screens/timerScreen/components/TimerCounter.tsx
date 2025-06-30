import { useEffect, useRef, useState } from "react";

interface TimerCounterProps {
  InitialMinutes?: number;
  InitialSeconds?: number;
  timerStatus: string;
  isRunning: boolean;
}

export const TimerCounter = ({
  InitialMinutes = 0,
  InitialSeconds = 0,
  timerStatus,
  isRunning,
}: TimerCounterProps) => {
  const [minutes, setMinutes] = useState(InitialMinutes);
  const [seconds, setSeconds] = useState(InitialSeconds);
  const refSeconds = useRef(InitialSeconds);
  const refMinutes = useRef(InitialMinutes);

  const handleTimerSetter = () => {
    if (!isRunning || (refMinutes.current <= 0 && refSeconds.current <= 0))
      return;
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

  return (
    <div className="flex flex-row w-full justify-evenly">
      <TimerButton value={minutes} title={"Minutes"} />
      <TimerButton value={seconds} title={"seconds"} />
    </div>
  );
};

interface TimerButtonProps {
  value: number;
  title: string;
}
const TimerButton = ({ value, title }: TimerButtonProps) => {
  return (
    <div className="flex flex-col w-5/12">
      <div className="bg-[#e7edf4] h-15 flex items-center justify-center rounded-xl text-xl">
        {value}
      </div>
      <div className="pt-2">{title}</div>
    </div>
  );
};

export default TimerCounter;
