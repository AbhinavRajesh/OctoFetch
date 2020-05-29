import React, { Component } from "react";
import { fetchData } from "./api";

import { Stats, Search } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  profileChange = async (username) => {
    const fetchedData = await fetchData(username);
    this.setState({ data: fetchedData });
  };

  render() {
    return (
      <div className={styles.container}>
        <Search profileChange={this.profileChange} />
        <Stats data={this.state.data} />
      </div>
    );
  }
}

export default App;
