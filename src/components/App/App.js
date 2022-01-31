import React, { useState, useEffect } from "react";
import CardList from "../CardList/CardList";
import "tachyons";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import axios from "axios";
import Scroll from "../Scroll/Scroll";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setRobots(res.data);
    });
  }, []);
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const filtredRobots = (robots || []).filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="tc">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filtredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
