import React from "react";

const Stats = ({ data }) => {
  // if (data.message === undefined) {
  //   if (data.username !== undefined) {
  //     console.log("Data is Loading...");
  //     return <h1>Data is Loading...</h1>;
  //   } else {
  //     console.log("User Not Found");
  //     return <h1>User Not Found</h1>;
  //   }
  // } else {
  //   console.log("Data Loaded!");
  //   return <h1>{data.username}</h1>;
  // }
  // if (data && data.username === undefined) {
  //   if (data.message === undefined) {
  //     console.log("Data is Loading...");
  //     return <h1>Loading...</h1>;
  //   } else {
  //     console.log("User Not found!");
  //     return <h1>User Not Found!</h1>;
  //   }
  // } else if(data) {
  //   console.log(`Name of the user: ${data.username}`);
  //   return <h1>Name of the user: {data.username}</h1>;
  // }

  if(data.message !== '404') {
    console.log(`Name of the user: ${data.username}`);
    return <h1>Name of the user: {data.username}</h1>;
  } else if(data.message === '404') {
    console.log("User Not found!");
    return <h1>User Not Found!</h1>;
  }else {
    console.log("Data is Loading...");
    return <h1>Loading...</h1>;
  }

};

export default Stats;
