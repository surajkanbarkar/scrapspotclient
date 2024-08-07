import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BRANDNAME } from "../../Services/Utils";
import Navbar from "../Common/Navbar";
import { Box, TextField } from "@mui/material";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleForgotPassword = async () =>{
    let formData = new FormData();
    formData.append("email", email)
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

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
        <h2>Forgot password</h2>
        </div>
        <Box
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}/>
              <TextField label="Password" variant="outlined" fullWidth value={password} onChange={(e) =>setPassword(e.target.value)}/>
              <TextField label="Comfirm password" variant="outlined" fullWidth value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
              <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-primary w-100 mt-4" onClick={handleForgotPassword}>
                Update
              </button>
              <Link to="/signin" className="btn btn-light w-100 mt-3">
                Back to sign in
              </Link>
            </div>
          </div>
            </Box>
          
      </div>
    </div>
    </>
   
  );
};

export default ForgotPassword;
