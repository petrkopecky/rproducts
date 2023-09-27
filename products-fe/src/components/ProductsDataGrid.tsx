import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "id" },
  { field: "name", headerName: "name", width: 300 },
  { field: "price", headerName: "price", width: 600 },
];
export default function ProductsDataGrid() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} />
    </div>
  );
}
