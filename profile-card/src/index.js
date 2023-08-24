import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar " src="amaanprofilecard.jpg" alt="amaan"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Mohd Amaan</h1>
      <p>
        I am a Web Developer and a tech Enthusiast.I love learning about new
        technologies.I am currently learning React.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="🚀" color="orangered" />
      <Skill skill="JavaScript" emoji="❤️" color="blue" />
      <Skill skill="HTML" emoji="✅" color="green" />
      <Skill skill="CSS" emoji="👋" color="yellow" />
      <Skill skill="Git and GitHub" emoji="💪" color="pink" />
      <Skill skill="Node" emoji="🎈" color="silver" />
      <Skill skill="Communication" emoji="🎀" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skill}
      {props.emoji}
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
