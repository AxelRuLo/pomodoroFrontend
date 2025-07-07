import ItemStatusBar from "./ItemStatusBar";

type TimerType = "pomodoro" | "shortBreak" | "longBreak";

interface StatusBarPomodoroProps {
  state: string;
  setPomodoroStage: (mode: TimerType) => void;
}

const StatusBarPomodoro = ({
  state,
  setPomodoroStage,
}: StatusBarPomodoroProps) => {
  return (
    <div className="w-5/6 min-w-[310px]">
      <div className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#e7edf4] p-1">
        <ItemStatusBar
          isActive={state == "pomodoro"}
          title={"Pomodoro"}
          handleClick={() => {
            setPomodoroStage("pomodoro");
          }}
        />
        <ItemStatusBar
          isActive={state == "shortBreak"}
          title={"Short Break"}
          handleClick={() => {
            setPomodoroStage("shortBreak");
          }}
        />
        <ItemStatusBar
          isActive={state == "longBreak"}
          title={"Large Break"}
          handleClick={() => {
            setPomodoroStage("longBreak");
          }}
        />
      </div>
    </div>
  );
};

export default StatusBarPomodoro;
