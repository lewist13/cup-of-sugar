import React, { useEffect } from "react";
import "../styles/Home.css";

function Home({ item, setItem }) {
  useEffect(() => {
    setItem(item);
  }, []);

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

export default Home;
