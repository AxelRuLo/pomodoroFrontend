import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import TimerScreen from "./presentation/screens/timerScreen/TimerScreen";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white text-center">
      <TimerScreen />
    </div>
  </StrictMode>
);
