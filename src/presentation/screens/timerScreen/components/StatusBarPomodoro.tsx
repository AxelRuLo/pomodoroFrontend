import ItemStatusBar from "./ItemStatusBar";

type TimerType = "pomodoro" | "shortBreak" | "longBreak";

interface StatusBarPomodoroProps {
  mode: string;
  setMode: (mode: TimerType) => void;
}

const StatusBarPomodoro = ({ mode, setMode }: StatusBarPomodoroProps) => {
  return (
    <div className="w-5/6 min-w-[310px]">
      <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#e7edf4] p-1">
        <ItemStatusBar
          isActive={mode == "pomodoro"}
          title={"Pomodoro"}
          handleClick={() => {
            setMode("pomodoro");
          }}
        />
        <ItemStatusBar
          isActive={mode == "shortBreak"}
          title={"Short Break"}
          handleClick={() => {
            setMode("shortBreak");
          }}
        />
        <ItemStatusBar
          isActive={mode == "longBreak"}
          title={"Large Break"}
          handleClick={() => {
            setMode("longBreak");
          }}
        />
      </div>
    </div>
  );
};

export default StatusBarPomodoro;
