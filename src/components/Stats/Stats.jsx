import React from "react";
import styles from "./Stats.module.css";

const Stats = ({ data }) => {
  if (data.message !== "404") {
    const a = new Date(data.created).toDateString().split(" ");
    console.log(`Name of the user: ${data.username}`);
    if (data.username === "example") var condition = true;
    return (
      <div className={styles.container}>
        <img src={data.avatar} alt={data.username} />
        <h2>{data.name}</h2>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          @{data.username}
        </a>
        <p>
          <i className="far fa-calendar-alt"></i> Joined {a[1]} {a[2]}, {a[3]}
        </p>
        <div className={styles.infocards}>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.total_repos}</p>
            </div>
            <div className={styles.infoname}>
              <p>Repositories</p>
            </div>
          </div>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.followers}</p>
            </div>
            <div className={styles.infoname}>
              <p>Followers</p>
            </div>
          </div>
          <div className={styles.infocard}>
            <div className={styles.infonumber}>
              <p>{data.following}</p>
            </div>
            <div className={styles.infoname}>
              <p>Following</p>
            </div>
          </div>
        </div>
        {condition ? (
          <div></div>
        ) : (
          <div className={styles.details}>
            <p>
              Name : <span>{data.name}</span>
            </p>
            <p>
              Username: <span>{data.username}</span>
            </p>
            {data.blog ? (
              <p>
                Blog : <span>{data.blog}</span>
              </p>
            ) : null}
          </div>
        )}
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
