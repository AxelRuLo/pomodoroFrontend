import { useState } from "react";
import ButtonTimer from "./components/ButtonTimer";
import StatusBarPomodoro from "./components/StatusBarPomodoro";
import TimerCounter from "./components/TimerCounter";
import NavbarComponent from "../../components/NavbarComponent";

type StatusTimer = "start" | "pause" | "skip" | "reset";
type TimerType = "pomodoro" | "shortBreak" | "longBreak";
interface TimerValues {
  minutes: number;
  seconds: number;
}

const TimerScreen = () => {
  const [timerStatus, setTimerStatus] = useState<StatusTimer>("start");
  const [titleButtonStartPause, setTitleButtonStartPause] = useState("start");
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerType, setTimerType] = useState<TimerType>("pomodoro");
  const [timeCounterValues, setTimeCounterValues] = useState<TimerValues>({
    minutes: 25,
    seconds: 0,
  });
  const [shortBreakSeconds, setShortBreakSeconds] = useState(300);
  const [longtBreakSeconds, setLongtBreakSeconds] = useState(900);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(1500);

  const handleTimerType = (type: TimerType) => {
    setTimerType(type);
  };

  const transformSecondsToMinutesSeconds = (timeToTransform: number) => {
    const seconds: number = timeToTransform % 60;
    const minutes = Math.floor(timeToTransform / 60);
    return { seconds, minutes };
  };

  const handleConfigurationAction = (seconds: number, minutes: number) => {
    const updatedSeconds = minutes * 60 + seconds;
    const updatedTimer = transformSecondsToMinutesSeconds(updatedSeconds);
    setPomodoroSeconds(updatedSeconds);
    setTimeCounterValues(updatedTimer);
  };

  const handleStartPauseButton = () => {
    const newStatus: StatusTimer = ["pause", "skip", "reset"].includes(
      timerStatus
    )
      ? "start"
      : "pause";
    setTitleButtonStartPause(newStatus);
    setTimerStatus(newStatus);
    setIsTimerRunning((prev) => !prev);
  };

  const handleSkipButton = () => {
    setTimerStatus("skip");
    setIsTimerRunning(false);
  };

  const handleResetButton = () => {
    setTimerStatus("reset");
    setIsTimerRunning(false);
    transformSecondsToMinutesSeconds(pomodoroSeconds);
  };

  return (
    <>
      <NavbarComponent
        titleScreen={timerType}
        icon={"+"}
        handleFunction={handleConfigurationAction}
      />
      <div className="flex items-center justify-center flex-col">
        <StatusBarPomodoro mode={timerType} setMode={handleTimerType} />
        <div
          id="timer_panel"
          className="pt-5 px-4 flex flex-col w-full justify-between"
        >
          <TimerCounter
            isRunning={isTimerRunning}
            timerStatus={timerStatus}
            InitialMinutes={timeCounterValues.minutes}
            InitialSeconds={timeCounterValues.seconds}
          />
        </div>

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
            <ButtonTimer title={"reset"} handleClick={handleResetButton} />
          </div>
          <div className="h-9 flex flex-row justify-evenly">
            <ButtonTimer title={"skip"} handleClick={handleSkipButton} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerScreen;
