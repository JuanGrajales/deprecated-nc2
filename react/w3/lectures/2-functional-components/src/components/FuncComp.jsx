// How do we create a functional component? (hint: remember rcc)
// How to call props in a functional component?

// rcc = react class component
// rsc = react stateless component
// to use the shortcuts install the vs code extension reactjs code snippets

import React from "react";

const FuncComp = ({ prop1 }) => {
  return (
    <div>
      <h1>Functional Component</h1>
      <p>Prop1 value: {prop1}</p>
    </div>
  );
};

export default FuncComp;
