import React, { useState } from "react";
import ScrapTableRow from "../Scraps/ScrapTableRow";
import CompanySidebar from "../Common/CompanySidebar";
import { Box, Button } from "@mui/material";
import AddProduct from "../Company/CAddProduct";
import ScrapyardSidebar from "../Common/ScrapyardSidebar";
import LogoutMenu from "../Common/LogoutMenu";

const SScrapsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const records = [
    {
      srNo: 1,
      category: "Category 1",
      productName: "Product A",
      quantity: 100,
      listedOn: "2023-11-24",
      pricePerKg: 10,
      totalAmount: 1000,
      action: "Edit",
    },
    {
      srNo: 2,
      category: "Category 2",
      productName: "Product B",
      quantity: 200,
      listedOn: "2023-12-01",
      pricePerKg: 15,
      totalAmount: 3000,
      action: "Delete",
    },
    // ... more records
  ];
  return (
    <div className="d-flex">
      <ScrapyardSidebar />
      <div className="container">
      <div className="dashboard-content">
      <div className='float-end'>
        <LogoutMenu />
      </div>
      <div className="dashboard-title">
          <h1>Products</h1>
          <hr/>
        </div>
    
    <div className="d-flex justify-content-between">
    <div className="dashboard-title">
        <h3>Listed products</h3>
    </div>
        <button className="btn btn-primary h-50 mt-4" onClick={handleOpenModal}>+ Add product</button>
    </div>
    <div class="table-responsive">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">Category</th>
              <th scope="col">Product name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Listed on</th>
              <th scope="col">Price/kg</th>
              <th scope="col">Total amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => {
              return <ScrapTableRow record={record} />;
            })}
          </tbody>
        </table>
        </div>
        <AddProduct open={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
    </div>
  );
};

export default SScrapsTable;
