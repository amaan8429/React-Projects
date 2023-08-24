import { useState } from "react";

export default function App() {
  const [step, stepchange] = useState(1);
  const [open, isOpen] = useState(true);
  function handlePrevious() {
    if (step > 1) stepchange((s) => s - 1);
    if (step === 1) stepchange(3);
  }
  function handleNext() {
    if (step < 3) stepchange((s) => s + 1);
    if (step === 3) stepchange(1);
  }

  function crosstoggle() {
    isOpen((o) => !o);
  }
  const messages = ["Eat 🍴", "Sleep 😴", "Code 🧑‍💻"];
  return (
    <>
      <button className="close" onClick={crosstoggle}>
        &times;
      </button>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bg="#7950f2" col="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bg="#7950f2" col="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bg, col, onClick, children }) {
  return (
    <button style={{ backgroundColor: bg, color: col }} onClick={onClick}>
      {children}
    </button>
  );
}
