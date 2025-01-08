import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  const skills = [
    ['React', 'R'],
    ['React Native', 'RN'],
    ['Javascript', 'JS'],
    ['Typescript', 'TS']
  ]

  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillsList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="../avatar.png" alt="Me" />
    </div>
  )
}

function Intro() {
  return (
    <>
      <h1>Isaiah Rodolfo</h1>
      <body>
        Hi, I am Isaiah and I love coding in React!
      </body>
    </>
  )
}

function SkillsList({ skills }) {

  function Skill({ skill }) {
    return (
      <div skill style={{ backgroundColor: 'lightgray', borderRadius: 15, padding: 8 }}>
        {skill[0]} {skill[1]}
      </div>
    )
  }

  return (
    <div className="skill-list">
      {skills.map((skill) => (<Skill skill={skill} />))}
    </div>
  )
}



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
