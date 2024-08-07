import logo from './logo.svg';
// import './App.css';
import '../src/Static/Style.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import CompanyDashboard from './Components/Company/CompanyDashboard';
import Navbar from './Components/Common/Navbar';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import ForgotPassword from './Components/Auth/ForgotPassword';
import PaymentsTable from './Components/Payment/PaymentsTable';
import ScrapsTable from './Components/Scraps/ScrapsTable';
import Profile from './Components/UserProfile/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Signup />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/dashboard" exact element={<CompanyDashboard />} />
          <Route path="/list-of-scraps" exact element={<ScrapsTable />} />
          <Route path="/payments" exact element={<PaymentsTable />} />
          <Route path="/user-profile" exact element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
