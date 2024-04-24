import React from "react";
import ReactDOM from "react-dom/client"; 

//JSX - HTML-like or XML-like syntax
const jsxHeading = (<h1 id="heading">Nameste Suvra from JSX 🚀</h1>)

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)