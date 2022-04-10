import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="text-center">
      <p>404</p>
      <h2> Page Not Found</h2>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
