import { UseTimer } from "../hooks/useTimer";

interface TimerCounterProps {
  InitialMinutes?: number;
  InitialSeconds?: number;
  timerStatus: string;
  isRunning: boolean;
  handleFinishedBlock: ()=>void;
}

export const TimerCounter = ({
  InitialMinutes = 0,
  InitialSeconds = 0,
  timerStatus,
  isRunning,
  handleFinishedBlock,
}: TimerCounterProps) => {
  const { minutes, seconds } = UseTimer({
    InitialMinutes,
    InitialSeconds,
    timerStatus,
    isRunning,
    handleFinishedBlock,
  });

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
