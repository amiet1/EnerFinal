import React, { useEffect } from "react";
import { useState, useRef } from "react";
import FetchData from "../../server/utils/FetchData";

const SignupForm = () => {
  const submitter = useRef();

  const submitFormDataToApi = async (formData) => {
    // Call your register endpoint and send your form data to it
    const response = await fetch("http://localhost:8080/create-user", {    // FETCH USES PARAMS : link/route AND object of of what its requeting and method
      body: JSON.stringify(formData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });

    if (response) {
      console.log(response);
    } else {
      console.error(error);
    }

    // Save the token you receive in response to either local storage or a cookie
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    submitFormDataToApi(Object.fromEntries(form));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up Here</h1>
        <div>
          <label htmlFor="first_name"> First Name </label>
          <input type="text" name="first_name" id="first_name" />

          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" id="last_name" />

          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="phone_number">Phone Number</label>
          <input type="phone" name="phone_number" id="phone_number" />

          <label htmlFor="address" aria-placeholder="whats your address?">
            Address
          </label>
          <input type="text" name="address" id="address" />

          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />

          <button ref={submitter}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
