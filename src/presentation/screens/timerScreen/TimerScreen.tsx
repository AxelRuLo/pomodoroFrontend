import { useState } from "react";
import ButtonTimer from "./components/ButtonTimer";
import StatusBarPomodoro from "./components/StatusBarPomodoro";

type StatusTimer = "start" | "pause" | "skip" | "reset";

const TimerScreen = () => {
  const [timerStatus, setTimerStatus] = useState<StatusTimer>("start");
  const [titleButtonStartPause, setTitleButtonStartPause] = useState("start");

  const handleStartPauseButton = () => {
    const newStatus: StatusTimer = ["pause", "skip", "reset"].includes(
      timerStatus
    )
      ? "start"
      : "pause";
    setTitleButtonStartPause(newStatus);
    setTimerStatus(newStatus);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <StatusBarPomodoro />
        <div
          id="button_panel"
          className="py-5 px-7 flex flex-col w-full h-32 justify-between"
        >
          <div className="h-9 flex flex-row justify-evenly">
            <ButtonTimer
              bgColor="bg-[#3d98f4]"
              title={titleButtonStartPause}
              handleClick={handleStartPauseButton}
            />
            <ButtonTimer
              title={"reset"}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
          <div className="h-9 flex flex-row justify-evenly">
            <ButtonTimer
              title={"skip"}
              handleClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerScreen;
