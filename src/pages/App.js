import { useState } from "react";
import Header from "../components/Header";
import Login from "../components/Login";
import Game from "../components/Game";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="container px-4 mx-auto h-screen">
      <Header />
      <div className="flex flex-col justify-center h-4/6 px-4 bg-slate-500 border-2 rounded-lg">
        {step === 1 ? <Login chageStep={setStep} /> : step === 2 ? <Game chageStep={setStep} /> : <Login chageStep={setStep} />}
      </div>
    </div>
  );
}

export default App;
