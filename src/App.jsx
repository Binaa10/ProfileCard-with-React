import React from "react";
import "./App.css";
//import { buildErrorMessage } from "vite";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "#0000ff",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "MERN",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "C++",
    level: "intermidate",
    color: "#2662EA ",
  },
];

export default function App() {
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

function Avatar() {
  return <img src="pictures/bini.jpg" alt="binios image" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Biniyam Biyadge</h1>
      <p>
        Full stack developer and Software Engineering student at Adama Science
        and Technology University. When not coding and studying, I like to play
        football.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill skillObj={skills} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>
        {skillObj.level == "advanced"
          ? skillObj.skill + "💪"
          : skillObj.level == "intermidate"
          ? skillObj.skill + "👍"
          : skillObj.skill + "👶"}
      </span>
    </div>
  );
}
