import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import "./styles.css";

function App() {
  const [step, setStep] = useState(1);
  const [dayInterval, setDayInterval] = useState(0); // today

  const date = new Date(); // now
  date.setDate(date.getDate() + dayInterval);

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(event) => { setStep(Number(event.target.value)); }}
      />
      <h3>Step: {step}</h3>
      <Counter
        text={"Count"}
        num={dayInterval}
        increaseBy={step}
        onIncrease={() => setDayInterval(dayInterval + step)}
        onDecrease={() => setDayInterval(dayInterval - step)}
      />
      The date {dayInterval} days from today is {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
      <br />
      <button
        name="reset"
        onClick={() => {
          setStep(0);
          setDayInterval(0);
        }}>
        Reset
      </button>
    </div>
  );
}

function Counter({ text, num, increaseBy, onIncrease, onDecrease }) {
  const handleIncrease = () => {
    if (onIncrease) {
      onIncrease();
    }
  };

  const handleDecrease = () => {
    if (onDecrease) {
      onDecrease();
    }
  };

  return (
    <div>
      <h3>{text}: {num}</h3>
      <button onClick={handleIncrease}>Increase by {increaseBy}</button>
      <button onClick={handleDecrease}>Decrease by {increaseBy}</button>
    </div>
  );
}






const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
