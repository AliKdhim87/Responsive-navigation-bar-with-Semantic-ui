import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => (
  <div>
    <h1>Nothing to see here!</h1>
    <p>
      <Link to="/">Go to the home page</Link>
    </p>
  </div>
);
