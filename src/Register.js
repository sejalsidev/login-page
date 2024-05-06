import React, { useState } from "react";
import {} from "react-bootstrap";
import Header from "./Header";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const signUp=()=>{
    //let item = { name, email, password };
    console.log(name, email, password);
  }
  const handleChange=(e)=>{
    e.preventDefault()
    console.log(name, email, password);
  }
  return (
    <>
    <Header/>
    <div className="container">
      <h1>Sign Up</h1>
      <form onChange={handleChange}>
        <div className="form-group ">
          <label htmlFor="colFormLabel" className="col-sm-1  col-form-label ">
            Name:
          </label>
          <input
            type="name"
            className="form-control "
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="colFormLabel" className="col-sm-6  col-form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="colFormLabel" className="col-sm-6  col-form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={signUp}>
          Submit
        </button>
      </form>
    </div>
   </>
  );
};

export default Register;
