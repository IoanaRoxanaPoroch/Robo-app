import React, { Component } from "react";
import CardList from "../CardList/CardList";
import "tachyons";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import axios from "axios";
import Scroll from "../Scroll/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: " ",
    };
  }
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ robots: res.data });
    });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filtredRobots = (robots || []).filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="tc">RoboFriend</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filtredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
