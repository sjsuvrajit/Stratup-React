import React from "react";
import ReactDOM from "react-dom/client"; 

//JSX - HTML-like or XML-like syntax
//React Element 
const jsxHeading = (<h1 id="heading">Nameste Suvra from JSX 🚀</h1>)

const NewComponent = () => (<span>From span component</span>)
console.log(jsxHeading);

const number = 1000;

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
   {/* component composition: A component is used in other component     
  < JsxHeading/>  */}
  
  {/* We can insert React Element also */}
  {jsxHeading}

  {/* we can write javascript as well */}
  <h2>{number}</h2>
  {console.log(number)}

  {/* we can write functioal comonent in 3 different ways */}
  <NewComponent/>
  <br></br>
  <NewComponent></NewComponent>
  <br></br>
  {NewComponent()}

  <h1 className="heading">Namaste React Functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

//this is how React Element render
//root.render(JsxHeading);

//this is how React Functional Compont render
root.render(< HeadingComponent/>);