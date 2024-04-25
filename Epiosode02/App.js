import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello Laminaar");

const jsxHeading = (
  <h1 id="heading" className="head">
    Hello React from JSX
  </h1>
);

const Headingcomponent = () => (
  <div id="container">
    <h1 id="head">Namaste React !</h1>
    <Headingcomponent1 />
  </div>
);

const Headingcomponent1 = () => {
  return (
    <div>
      <h1> Hello I am React Functional Component!</h1>
      <Headingcomponent2 />
    </div>
  );
};

const Headingcomponent2 = () => <h1> Hello I am React Functional child !</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent />);
