import logo from './logo.svg';
// import './App.css';
import '../src/Static/Style.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import CompanyDashboard from './Components/Company/CompanyDashboard';
import Signup from './Components/Auth/Signup';
import Signin from './Components/Auth/Signin';
import ForgotPassword from './Components/Auth/ForgotPassword';
import ScrapsTable from './Components/Scraps/ScrapsTable';
import CustomerDashboard from './Components/Customer/CustomerDashboard';
import ScrapyardDashboard from './Components/Scrapyard/ScrapyardDashboard';
import PaymentsReceivedTable from './Components/Payment/PaymentsReceivedTable';
import PaymentsMadeTable from './Components/Payment/PaymentsMadeTable';
import ScrapyardPayments from './Components/Scrapyard/ScrapyardPayments';
import CompanyProfile from './Components/Company/CompanyProfile';
import CustomerProfile from './Components/Customer/CustomerProfile';
import ScrapyardProfile from './Components/Scrapyard/ScrapyardProfile';
import SScrapsTable from './Components/Scrapyard/SScrapsTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Signup />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/forgotPassword" exact element={<ForgotPassword />} />
          <Route path="/company-dashboard" exact element={<CompanyDashboard />} />
          <Route path="/scrapyard-dashboard" exact element={<ScrapyardDashboard />} />
          <Route path="/customer-dashboard" exact element={<CustomerDashboard />} />
          <Route path="/com-list-of-scraps" exact element={<ScrapsTable />} />
          <Route path="/sr-list-of-scraps" exact element={<SScrapsTable />} />
          <Route path="/cus-list-of-scraps" exact element={<ScrapsTable />} />
          <Route path="/r-payments" exact element={<PaymentsReceivedTable />} />
          <Route path="/m-payments" exact element={<PaymentsMadeTable />} />
          <Route path="/scrapyard-payments" exact element={<ScrapyardPayments />} />
          <Route path="/company-profile" exact element={<CompanyProfile />} />
          <Route path="/customer-profile" exact element={<CustomerProfile />} />
          <Route path="/scrapyard-profile" exact element={<ScrapyardProfile />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
