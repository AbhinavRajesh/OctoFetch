import React, { Component } from "react";
import { fetchData } from "./api";

import { Stats, Search } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
    userInput: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
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
      console.log(fetchedData);
      this.setState({ data: fetchedData });
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
      </div>
    );
  }
}

export default App;
