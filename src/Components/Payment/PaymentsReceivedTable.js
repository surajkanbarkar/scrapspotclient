import React, { useEffect, useState } from "react";
import Sidebar from "../Common/CompanySidebar";
import PaymentsTableRow from "./PaymentsReceivedTableRow";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import PaymentService from "../../Services/PaymentService";

const PaymentsReceivedTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(()=>{
    getPayments();
  },[])

  const getPayments = () =>{
    const userProfileId = localStorage.getItem("userId")
    PaymentService.GetAllPayments(userProfileId)
    .then(response => {
      console.log(response.data)
      if (response.status === 200) {
        setTransactions(response.data);
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
        <div className="table-responsive mt-5">
          <table className="table table-hover table-dark">
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
            {transactions.map((record, index) => {
                if (record.someCondition) {
                    return <PaymentsTableRow key={index} record={record} />;
                } else {
                    return <div key={0}>No data available</div>;
                }
            })}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default PaymentsReceivedTable;
