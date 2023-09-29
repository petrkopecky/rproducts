import Box from "@mui/material/Box";
import ProductsDataGrid from "./ProductsDataGrid";
import ProductDetail from "./ProductDetail";
import { IProduct } from "../model/IProduct";
import React from "react";

export default function Products() {
  const [productDetail, setProductDetail] = React.useState<IProduct>();
  //{id: -1,price: 0, name: "adfa", description: "adfa", }
  function onDetail(product: IProduct) {
    console.log(`onDetail ${product.id}`);
    setProductDetail(product);
  }
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <ProductsDataGrid onDetail={onDetail} />
      <ProductDetail product={productDetail} />
    </Box>
  );
}
