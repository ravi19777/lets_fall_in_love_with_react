import React from "react";
import ReactDOM  from "react-dom/client";

// create an element in react
const heading = React.createElement("h1",{id: 'heading'},"This is heading in React.js"); // This is create an object/react element (which is just a javascript object)

console.log(React);

console.log(ReactDOM);

// ❓ 1. What is the difference between React and ReactDOM?

// => React is responsible for Creating the views (elements and components) and ReactDOM is responsible for rendering (show) that element to the web-page

// create the root (where we have to render this heading element)

const root = ReactDOM.createRoot(document.getElementById('root')); // Now, this root element is the root for all the dom manipulation in the reactdom

// ❓ What is the work of react-dom?
// => React DOM is like "DOM" for react-application, it render all the components and element of our app in the browser. It is the part of the React library and local to the react. It help react-application to connect with the 'Real-DOM'


// 🌟 🌟 Create the nested elements in react
// <div class="parent">
//      <div class="Child">
//          <h1>This is heading inside the child</h1>
//      </div>
// </div>

const parent = React.createElement("div",{className: "Parent"},
                        React.createElement("div",{className: "Child"},
                        React.createElement("h1",{className: "heading"},"This is Namaste React 🚀")
                        )
                        );


                        // Now create two element inside the child element at a time
                        const parent2 = React.createElement("div",{className: "Parent"},[React.createElement("h1",{className: "h1"},"This is Namaste React 🚀"), React.createElement("h2",{className: "h2"},"This is the heading-two inside the parent element")]);

// root.render(heading); // heading is the 'react-element' or simply a js object

root.render(parent2);

// ❓ If 'heading' is an object then, how we convert that object in HTML tag/element

// => To convert the heading from object to the HTML tag/element, render function is responsible. It takes that object as an argument and convert it in the tag which is understandable by the browser