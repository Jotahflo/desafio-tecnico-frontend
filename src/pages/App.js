import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Header from "../components/Header";
import Login from "../components/Login";
import Game from "../components/Game";
import CompleteMessage from "../components/CompleteMessage";
import "../styles/app.css";

function App() {
  const [step, setStep] = useState(1);
  const [username] = useLocalStorage("username", "");
  const [totalSuccesses, setTotalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors, setTotalErrors] = useLocalStorage("totalErrors", 0);

  useEffect(() => {
    if (username !== "") {
      setTotalSuccesses(0);
      setTotalErrors(0);
      setStep(2);
    }
  }, []);

  return (
    <div className="container-app">
      <Header />
      {step === 2 && <p className="container-app__label">Find the cards that are equal</p>}
      <div className="container-app__body">
        {step === 1 ? <Login changeStep={setStep} /> : step === 2 ? <Game changeStep={setStep} /> : <CompleteMessage changeStep={setStep} />}
      </div>
    </div>
  );
}

export default App;
