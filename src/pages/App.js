import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Header from "../components/Header";
import Login from "../components/Login";
import Game from "../components/Game";
import CompleteMessage from "../components/CompleteMessage";

function App() {
  const [step, setStep] = useState(1);
  const [name] = useLocalStorage("name", "");
  const [totalSuccesses, setTotalSuccesses] = useLocalStorage("totalSuccesses", 0);
  const [totalErrors, setTotalErrors] = useLocalStorage("totalErrors", 0);

  useEffect(() => {
    if (name !== "") {
      setTotalSuccesses(0);
      setTotalErrors(0);
      setStep(2);
    }
  }, []);

  return (
    <div className="container px-4 pb-4 mx-auto h-full md:h-screen">
      <Header />
      {step === 2 && <p className="font-bold text-center">Find the cards that are equal</p>}
      <div className="flex flex-col items-center justify-center h-full md:h-3/4 p-4 bg-slate-500 border-2 rounded-lg">
        {step === 1 ? <Login changeStep={setStep} /> : step === 2 ? <Game changeStep={setStep} /> : <CompleteMessage changeStep={setStep} />}
      </div>
    </div>
  );
}

export default App;
