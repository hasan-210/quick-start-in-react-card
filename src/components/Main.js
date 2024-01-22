import React from "react"
import {  Link } from "react-router-dom";
import One from "./one";
const Main = () => {
  return (
<>
      <div>Main</div>
      <One/>
      <Link to="/header">header</Link>
      <Link to="/footer">footer</Link>
      </>
  );
};
export default Main