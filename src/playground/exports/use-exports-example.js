import isSenior, { isAdult, canDrink } from "./exports-example.js";

import React from "react";
import ReactDOM from "react-dom";

console.log("app.js is running...");

console.log("Is an adult: ", isAdult(19));
console.log("Can drink: ", canDrink(19));
console.log("Is senior: ", isSenior(66));

const template = <p>jsx test</p>;
ReactDOM.render(template, document.getElementById("app"));
