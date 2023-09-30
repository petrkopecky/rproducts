import Box from "@mui/material/Box";
import ProductsDataGrid from "./ProductsDataGrid";
import ProductDetail from "./ProductDetail";
import { IProduct } from "../model/IProduct";
import { useState } from "react";
import { Button } from "@mui/base";
import "./Products.css";
import ProductAdd from "./ProductAdd";

enum FormMode {
  view,
  add,
}

export default function Products() {
  const [formMode, setFormMode] = useState<FormMode>(FormMode.view);
  const [productDetail, setProductDetail] = useState<IProduct>();
  //{id: -1,price: 0, name: "adfa", description: "adfa", }
  function onDetail(product: IProduct) {
    console.log(`onDetail ${product.id}`);
    setProductDetail(product);
  }
  function onAddButton() {
    setFormMode(FormMode.add);
  }

  function onProductAdd() {
    setFormMode(FormMode.view);
  }

  function renderViewMode() {
    return (
      <Box className="datagridbox">
        <Button className="addbutton" onClick={onAddButton}>
          add new product
        </Button>
        <ProductsDataGrid onDetail={onDetail} />
        <ProductDetail product={productDetail} className="productdetail" />
      </Box>
    );
  }

  function renderAddMode() {
    return (
      <div>
        <ProductAdd onProductAdd={onProductAdd}></ProductAdd>
      </div>
    );
  }

  if (formMode === FormMode.view) {
    return renderViewMode();
  }
  if (formMode === FormMode.add) {
    return renderAddMode();
  }
}
