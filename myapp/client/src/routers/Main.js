import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <ul>
        <li>
          {" "}
          <Link to="/firstpage">firstpage</Link>
        </li>
        <li>
          {" "}
          <Link to="/secondpage">secondpage</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Main;
