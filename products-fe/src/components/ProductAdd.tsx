import React, { useState } from "react";
import "./ProductAdd.css";
import { IProduct } from "../model/IProduct";
interface FormProps {
  onProductAdd: () => void;
}

export default function ProductAdd({ onProductAdd }: FormProps) {
  const [newProduct, setNewProduct] = useState<IProduct>({});

  function onProductAddClick() {
    fetch("/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    onProductAdd();
  }

  return (
    <>
      <p>
        <b>new product</b>
      </p>
      <table className="propertytable">
        <tr>
          <td>name:</td>
          <td>
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewProduct({ ...newProduct, name: event.target.value });
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td>price:</td>
          <td>
            <input
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewProduct({ ...newProduct, price: event.target.value });
              }}
            ></input>
          </td>
        </tr>
        <tr>
          <td>description:</td>
          <td>
            <input
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setNewProduct({
                  ...newProduct,
                  description: event.target.value,
                });
              }}
            ></input>
          </td>
        </tr>
      </table>

      <button onClick={onProductAddClick} className="button">
        add
      </button>
      <button onClick={onProductAdd} className="button">
        cancel
      </button>
    </>
  );
}
