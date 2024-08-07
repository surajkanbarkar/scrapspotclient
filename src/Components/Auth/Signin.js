import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Common/Navbar";
import { Box, Button, TextField } from "@mui/material";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () =>{
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    setTimeout(() => {
      //navigate("/dashboard");
    }, 6000);
  }
  return (
    <>
      <Navbar />
      <div className="centered">
        <div className="sm-container mb-3">
          <div className="header-div">
            <h1>Sign in</h1>
          </div>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleSignin}>
                Sign in
              </button>
              <Link to="/forgotPassword">
                Forgot password ?
              </Link>
              <Link to="/signup" className="btn btn-light w-100 ">
                Don't have an account?
              </Link>
            </Box>
        </div>
      </div>
    </>
  );
};

export default Signin;
