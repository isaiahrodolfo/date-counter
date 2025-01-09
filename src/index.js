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
      <Counter
        text={"Step"}
        num={step}
        increaseBy={1}
        onIncrease={() => setStep(step + 1)}
        onDecrease={() => setStep(step - 1)}
      />
      <Counter
        text={"Count"}
        num={dayInterval}
        increaseBy={step}
        onIncrease={() => setDayInterval(dayInterval + step)}
        onDecrease={() => setDayInterval(dayInterval - step)}
      />
      The date {dayInterval} days from today is {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
