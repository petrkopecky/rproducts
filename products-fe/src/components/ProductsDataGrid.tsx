import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { IProduct } from "../model/IProduct";

interface FormProps {
  onDetail: (data: IProduct) => void;
}

export default function ProductsDataGrid({ onDetail }: FormProps) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("/api/products")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);
  console.log(tableData);

  const renderDetailsButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            console.log(params.row);
            handleOnDetail(params.row);
          }}
        >
          More Info
        </Button>
      </strong>
    );
  };

  function handleOnDetail(row) {
    let product = { ...row } as IProduct;
    console.log(product.id);
    onDetail(product);
  }

  const columns = [
    { field: "id", headerName: "id" },
    { field: "name", headerName: "name", width: 150 },
    { field: "price", headerName: "price", width: 150 },
    {
      field: "detail",
      headerName: "detail",
      width: 150,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: true,
    },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={tableData} columns={columns} />
    </div>
  );
}
