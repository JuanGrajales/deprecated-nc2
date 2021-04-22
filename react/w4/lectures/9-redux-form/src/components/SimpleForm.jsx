import React from "react";
import { LocalForm, Control } from "react-redux-form";

const SimpleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <div>
          <label htmlFor="matchIdForInput">Username</label>
          <Control.text
            model=".username"
            id="matchIdForInput"
            placeholder="username"
          />
        </div>
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default SimpleForm;
