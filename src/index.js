//import react from "react";
import reactDom from "react-dom";

const element = (
  <>
    <h1>Hello World!</h1>
    <img src="https://picsum.photos/500" alt="image"></img>
  </>
); // this is a jsx expression and Babel will be compile into react
console.log(element);
reactDom.render(element, document.getElementById("root"));
