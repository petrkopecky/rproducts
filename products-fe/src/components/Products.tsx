import Box from "@mui/material/Box";
import ProductsDataGrid from "./ProductsDataGrid";
import ProductDetail from "./ProductDetail";
import { IProduct } from "../model/IProduct";
import React from "react";
import { Button } from "@mui/base";
import "./Products.css";

export default function Products() {
  const [productDetail, setProductDetail] = React.useState<IProduct>();
  //{id: -1,price: 0, name: "adfa", description: "adfa", }
  function onDetail(product: IProduct) {
    console.log(`onDetail ${product.id}`);
    setProductDetail(product);
  }
  return (
    <div>
      <Box className="datagridbox">
        <Button className="addbutton">add new product</Button>
        <ProductsDataGrid onDetail={onDetail} />
        <ProductDetail product={productDetail} />
      </Box>
    </div>
  );
}
