import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
//import Pet from "./Pet.js";
import SearchParams from "./SearchParams";
import Details from "./Details";

// const App = () => {
//   return React.createElement(
//     "div",
//     { title: "I am an attribute on the div!" },
//     [
//       React.createElement("h1", {}, "Adopt Me!"),
//       React.createElement(Pet, {
//         name: "Blackie",
//         animal: "Dog",
//         breed: "Westie",
//       }),
//       React.createElement(Pet, {
//         name: "Fate",
//         animal: "Dog",
//         breed: "Lhasa Apso",
//       }),
//       React.createElement(Pet, {
//         name: "Yellow",
//         animal: "Giraffe",
//         breed: "Without Brown Dots",
//       }),
//     ]
//   );
// };
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
