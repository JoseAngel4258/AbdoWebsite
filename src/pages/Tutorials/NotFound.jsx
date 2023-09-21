import React from "react";
import { Link as RouteLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <nav>
        <h1>
          <RouteLink to="/">ABDO 77</RouteLink>
        </h1>
      </nav>
      <h1>404 Sorry</h1>
    </>
  );
}
