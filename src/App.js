import React, { Component } from "react";
import { fetchData } from "./api";

import { Stats, Search } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    fetchData()
    .then(newData => {
      if(newData === undefined) {
        console.log('User not found')
        this.setState({data: {message: '404'}})
      } else {
        console.log(newData)
        this.setState({data:newData})
      }
    })
    .catch(err => console.log(err))
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
