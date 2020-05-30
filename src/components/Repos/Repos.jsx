import React from "react";
import styles from "./Repos.module.css";

const Repos = ({ repos }) => {
  if (!repos) {
    return <div>{console.log("No repos are Present")}</div>;
  }
  return (
    <div>
      {repos.map((i, index) => (
        <h1 key={index}>{repos[index]}</h1>
      ))}
    </div>
  );
};

export default Repos;
