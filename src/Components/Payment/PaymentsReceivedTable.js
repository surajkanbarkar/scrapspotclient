import React, { useEffect } from "react";
import Sidebar from "../Common/CompanySidebar";
import PaymentsTableRow from "./PaymentsReceivedTableRow";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import PaymentService from "../../Services/PaymentService";

const PaymentsReceivedTable = () => {
  const [transactions, setTransactions] = useEffect();

  useEffect(()=>{
    getPayments();
  },[])

  const getPayments = () =>{
    const userProfileId = localStorage.getItem("userId")
    PaymentService.GetAllPayments(userProfileId)
    .then(response => {
      if (response.status === 200) {
        setTransactions(response);
      }
    })
    .catch(error => {
    })
  }
  return (
      <div>
        <div className="dashboard-title">
          <h2>Payments received</h2>
        </div>
        <div class="table-responsive mt-5">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">Sr. No.</th>
                <th scope="col">Transaction id</th>
                <th scope="col">Received from</th>
                <th scope="col">Payment mode</th>
                <th scope="col">Status</th>
                <th scope="col">Paid on</th>
                <th scope="col">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((record) => {
                return <PaymentsTableRow record={record} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default PaymentsReceivedTable;
