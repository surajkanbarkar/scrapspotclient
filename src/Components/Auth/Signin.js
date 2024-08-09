import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Common/Navbar";
import { Box, Button, TextField } from "@mui/material";
import { ValidateEmail, ValidatePassword } from "./Validation";
import Toast from "../Common/Snackbar";

const Signin = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [userRole, setUserRole] = useState(null);


  const validate = () => {
    const tempErrors = {};
    let isValid = true;
    console.log(email + "----"+ password);
    isValid = ValidateEmail(email, tempErrors) && isValid;
    isValid = ValidatePassword(password, tempErrors, "password") && isValid;

    console.log(tempErrors)
    setErrors(tempErrors);
    return isValid;
};
  const handleSignin = async (e) =>{
    e.preventDefault();
    if (validate()){
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
  
      // make axios call to sign in

      setSnackbarMessage('Sign-up successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setTimeout(() => {
        //navigate("/dashboard");
        // Redirect based on role
        // if (userRole === 'customer') {
        //   navigate('/customer-dashboard');
        // } else if (userRole === 'scrapyard') {
        //     navigate('/scrapyard-dashboard');
        // } else if (userRole === 'company') {
        //     navigate('/company-dashboard');
        // } else {
        //     console.log("Invalid role");
        // }
        navigate("/scrapyard-dashboard");
      }, 6000);
    }
    else{
      console.log("Invalid credentials")
    }
    
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
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
              <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
                />
              
              <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              />
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
        <Toast
        open={snackbarOpen}
        close={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
      </div>
    </>
  );
};

export default Signin;
