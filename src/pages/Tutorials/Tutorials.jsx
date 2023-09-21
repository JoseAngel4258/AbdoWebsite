import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Tutorials = () => {
  return (
    <>
      <nav>
        <h1>
          <RouteLink to="/">ABDO 77</RouteLink>
        </h1>
      </nav>
      <div>Tutorials</div>
    </>
  );
};

export default Tutorials;
