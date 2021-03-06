import React from "react";
import Link from "gatsby-link";

export default () => (
  <div style={{ color: "tomato" }}>
    <h1>Hello Gatsby!</h1>
    <p>Gatsby look awesome!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2">Link to Page 2</Link>
    </div>
    <div>
      <Link to="/page-3">Link to Page 3</Link>
    </div>
    <div>
      <Link to="/counter">Link to Counter!</Link>
    </div>
  </div>
);
