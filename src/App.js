import React, { Component } from "react";
import { fetchData, fetchRepos } from "./api";

import { Stats, Search, Repos } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    repos: [],
    userInput: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData("example");
    this.setState({ data: fetchedData });
  }

  handleSearch = (e) => {
    this.setState({ userInput: e }, () =>
      console.log(`UserInput: ${this.state.userInput}`)
    );
  };

  profileChange = async () => {
    const fetchedData = await fetchData(this.state.userInput);
    if (fetchedData === undefined) {
      console.log("User not found");
      this.setState({ data: { message: "404" } });
    } else {
      const fetchedRepos = await fetchRepos(this.state.userInput);
      this.setState({ data: fetchedData });
      if (fetchedRepos) {
        this.setState({ repos: fetchedRepos }, () =>
          console.log(this.state.repos)
        );
        console.log(fetchedRepos);
      } else {
        this.setState({ repos: "" });
      }
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <Search
          profileChange={this.profileChange}
          handleSearch={this.handleSearch}
        />
        <Stats data={this.state.data} />
        <Repos repos={this.state.repos} username={this.state.data.username} />
      </div>
    );
  }
}

export default App;
