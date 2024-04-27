import React from "react";
import ReactDOM from "react-dom/client"; 

//JSX - HTML-like or XML-like syntax
//React Element 
const JsxHeading = () => (<h1 id="heading">Nameste Suvra from JSX 🚀</h1>)

console.log(JsxHeading);

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
   {/* component composition: A component is used in other component     */}
  < JsxHeading/>  
  <h1 className="heading">Namaste React Functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//this is how React Element render
//root.render(JsxHeading);

//this is how React Functional Compont render
root.render(< HeadingComponent/>);