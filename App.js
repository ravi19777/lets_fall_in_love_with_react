import React from "react";

import ReactDOM from "react-dom/client";

// create an element

// const heading = React.createElement("h1",{id: "heading-one"},"Namaste React 🚀");



// 👍 👍 Ok Ok

// 🌟 So the complain was that we are finding to create react element using the React.CreateElement very lengthy.

// 🌟 So, From now we will leave that method and will use JSX to create React Element

// 😄


// JSX

const jsxHeading = <h2>Namaste React using JSX 🚀</h2> // jsxHeading is also an object not HTML

// create a root element

const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDom will create an html element using the object which it get as an argument and remember that object is a React element

// Now render the react element to the dom
root.render(jsxHeading);