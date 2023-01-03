import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1', { id: "head", raltion: "hello" }, "Nameste React");
const heading2 = React.createElement('h1', {}, "heading2");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render([heading, heading2]);
