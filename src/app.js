import isSenior, { isAdult, canDrink } from "./person.js";

import React from "react";
import ReactDOM from "react-dom";

console.log("app.js is running...");

console.log("Is an adult: ", isAdult(19));
console.log("Can drink: ", canDrink(19));
console.log("Is senior: ", isSenior(66));

const template = React.createElement("p", {}, "React test");
ReactDOM.render(template, document.getElementById("app"));
