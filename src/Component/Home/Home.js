import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "../Nav/Nav";

const Home = () => {
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setCounter(data));
  }, []);
  return (
    <div>
      {counter.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
};

export default Home;
