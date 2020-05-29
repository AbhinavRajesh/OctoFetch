import React from "react";
import styles from "./Stats.module.css";

const Stats = ({ data }) => {
  if (data.message !== "404") {
    console.log(`Name of the user: ${data.username}`);
    return (
      <div className="container">
        <h1>Name of the user: {data.username}</h1>
        <h1>Followers of the user: {data.followers}</h1>
        <h1>Following of the user: {data.following}</h1>
        <h1>Blog of the user: {data.blog}</h1>
        <h1>Repos of the user: {data.total_repos}</h1>
      </div>
    );
  } else if (data.message === "404") {
    console.log("User Not found!");
    return (
      <div className={styles.container}>
        <h1>User Not Found!</h1>
      </div>
    );
  } else {
    console.log("Data is Loading...");
    return (
      <div className={styles.container}>
        <h1>Data is loading...</h1>
      </div>
    );
  }
  // if (!data.username) {
  //   if (!data.message) {
  //     console.log("Loading...");
  //     return <h1>Loading</h1>;
  //   } else {
  //     console.log("User Not Found!");
  //     return <h1>User Not Found!</h1>;
  //   }
  // } else {
  //   console.log(`User: ${data.username}`);
  //   return (
  //     <div className="container">
  //       <h1>Name of the user: {data.username}</h1>
  //       <h1>Followers of the user: {data.followers}</h1>
  //       <h1>Following of the user: {data.following}</h1>
  //       <h1>Blog of the user: {data.blog}</h1>
  //       <h1>Repos of the user: {data.total_repos}</h1>
  //     </div>
  //   );
  // }
};

export default Stats;
