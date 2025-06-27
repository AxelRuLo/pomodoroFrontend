
import { useState } from "react";
import ItemStatusBar from "./ItemStatusBar";

type PomodoroMode = "pomodoro" | "shortBreak" | "longBreak";

const StatusBarPomodoro = () => {
  const [activeMode, setActiveMode] = useState<PomodoroMode>("pomodoro");

  return (
    <div className="w-5/6 min-w-[310px]">
      <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#e7edf4] p-1">
        <ItemStatusBar
          isActive={activeMode == "pomodoro"}
          title={"Pomodoro"}
          handleClick={() => {
            setActiveMode("pomodoro");
          }}
        />
        <ItemStatusBar
          isActive={activeMode == "shortBreak"}
          title={"Short Break"}
          handleClick={() => {
            setActiveMode("shortBreak");
          }}
        />
        <ItemStatusBar
          isActive={activeMode == "longBreak"}
          title={"Large Break"}
          handleClick={() => {
            setActiveMode("longBreak");
          }}
        />
      </div>
    </div>
  );
};

export default StatusBarPomodoro;
