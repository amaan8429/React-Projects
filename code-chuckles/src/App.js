import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "Why do programmers prefer dark mode?",
    answer: "Because light attracts bugs.",
  },
  {
    id: 7336,
    question: "How do you comfort a JavaScript bug?",
    answer: "You console it.",
  },
  {
    id: 8832,
    question: "Why did the web developer go broke?",
    answer: "Because he lost his domain in a bet.",
  },
  {
    id: 1297,
    question: "Why did the web developer refuse to get married?",
    answer:
      "They didn't believe in long-term commitments, only short-term sessions.",
  },
  {
    id: 9103,
    question: "Why was the web developer cold? ",
    answer: "Because he left his Windows open.",
  },
  {
    id: 2002,
    question: " Why did the web developer get arrested? ",
    answer: "Because they stole someone's bandwidth.",
  },
  {
    id: 1000,
    question: " Why did the web developer turn to the dark side?",
    answer: "They realized it had better cookies.",
  },
  {
    id: 1300,
    question: " Why did the web developer wear sunglasses to work?",
    answer: "They wanted to protect their site from too much exposure.",
  },
  {
    id: 2300,
    question: "Why did the web developer become a grave digger?",
    answer: "They heard there was great potential for back-end development.",
  },
];

function FlashCards() {
  const [selectedId, setselectedId] = useState(null);

  function handleClick(id) {
    setselectedId(id === selectedId ? null : id);
  }

  return (
    <>
      <div className="heading">
        <h1>Laugh Your Way Through Code</h1>
        <p>clicking on atleast 2 questions is mandatory.</p>
      </div>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
      <footer className="footer ">Made with ❤️ by Mohd Amaan</footer>
    </>
  );
}
