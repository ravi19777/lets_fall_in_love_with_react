import React from "react";

import ReactDOM from "react-dom/client";
// JSX

const jsxHeading = <h2>Namaste React using JSX 🚀</h2> // jsxHeading is also an object not HTML

// create a root element

const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDom will create an html element using the object which it get as an argument and remember that object is a React element

// Now render the react element to the dom
root.render(jsxHeading);