import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import TimerScreen from "./presentation/screens/timerScreen/TimerScreen";
import NavbarComponent from "./presentation/components/NavbarComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white text-center">
      <NavbarComponent titleScreen={"Pomodoro"} icon={"+"} />
      <TimerScreen />
    </div>
  </StrictMode>
);
