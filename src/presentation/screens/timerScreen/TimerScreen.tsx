import ButtonTimer from "./components/ButtonTimer";
import StatusBarPomodoro from "./components/StatusBarPomodoro";
import TimerCounter from "./components/TimerCounter";
import NavbarComponent from "../../components/NavbarComponent";
import { useCounter } from "./hooks/useCounter";
import { useCounterNavbar } from "./hooks/useCounterNavbar";
import { useEffect, useState } from "react";
import ModalAlarmComponent from "../../components/ModalAlarmComponent";
import iconImage from "../../../assets/png/setting.png";

const TimerScreen = () => {
  const [isAlarmRinging, setIsAlarmRinging] = useState(false);
  const openModal = () => setIsAlarmRinging(true);
  const closeModal = () => setIsAlarmRinging(false);
  const { pomodoroState, handlePomodoroStage, handleNextState } =
    useCounterNavbar();

  const {
    timeCounterValues,
    timerStatus,
    isTimerRunning,
    handleStartPauseButton,
    handleResetButton,
    resetTimer,
    setConfigTimer,
  } = useCounter();

  const handleConfiguration = (minutes: number, seconds: number) => {
    setConfigTimer(pomodoroState, minutes, seconds);
  };

  const handleSkip = () => {
    handleNextState();
    handleResetButton(pomodoroState);
  };

  const handleNexStage = () => {
    handleSkip();
    openModal();
  };

  useEffect(() => {
    resetTimer(pomodoroState);
  }, [pomodoroState]);

  return (
    <>
      <ModalAlarmComponent isOpen={isAlarmRinging} handleClose={closeModal} />
      <NavbarComponent
        titleScreen={"Pomodoro"}
        pomodoroState={pomodoroState}
        icon={iconImage}
        handleFunction={handleConfiguration}
      />
      <div className="flex items-center justify-center flex-col">
        <StatusBarPomodoro
          state={pomodoroState}
          setPomodoroStage={handlePomodoroStage}
        />
        <div
          id="timer_panel"
          className="pt-5 px-4 flex flex-col w-full justify-between"
        >
          <TimerCounter
            isRunning={isTimerRunning}
            timerStatus={timerStatus}
            InitialMinutes={timeCounterValues.minutes}
            InitialSeconds={timeCounterValues.seconds}
            handleFinishedBlock={handleNexStage}
          />
        </div>

        <div
          id="button_panel"
          className="py-5 px-7 flex flex-col w-full h-32 justify-between"
        >
          <div className="h-9 flex flex-row justify-evenly">
            <ButtonTimer
              bgColor="bg-[#3d98f4]"
              title={isTimerRunning ? "pause" : "start"}
              handleClick={handleStartPauseButton}
            />
            <ButtonTimer
              title={"reset"}
              handleClick={() => handleResetButton(pomodoroState)}
            />
          </div>
          <div className="h-9 flex flex-row justify-evenly">
            <ButtonTimer title={"skip"} handleClick={handleSkip} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimerScreen;
