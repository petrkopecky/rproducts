import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/base";
import { IProduct } from "../model/IProduct";
import "./ProductDataGrid.css";

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
          className="detailbutton"
          onClick={() => {
            console.log(params.row);
            handleOnDetail(params.row);
          }}
        >
          detail
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
    <div className="datagriddiv">
      <DataGrid
        rows={tableData}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  );
}
