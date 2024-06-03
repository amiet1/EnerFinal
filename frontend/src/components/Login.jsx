import React from 'react';



const handleSubmit = (e) => {
e.preventDefault();
};

const LoginForm = () => {
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div id='login'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>
      <button type="submit">Log in</button>
      <button type="submit"> Not One Of A kind ? Sign up! </button>
      </form>
    </div>
  );
};
//connect users to sign up if no acc exists 
//connect button route to users page
export default LoginForm;
