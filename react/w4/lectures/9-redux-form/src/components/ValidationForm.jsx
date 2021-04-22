import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

const ValidationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <div>
          <label htmlFor="matchIdForInput">Email</label>
          <Control.text
            model=".email"
            id="matchIdForInput"
            placeholder="email"
            validators={{
              required: (val) => val?.length > 0,
              minLength: (val) => val?.length > 2,
            }}
          />
          <Errors
            className="text-danger"
            model=".email"
            show="touched"
            component="div"
            messages={{
              required: "Required",
              minLength: "Must be at least 2 characters",
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default ValidationForm;
