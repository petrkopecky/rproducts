import React, { useState } from "react";
import "./ProductAdd.css";
import { IProduct } from "../model/IProduct";
interface FormProps {
  onProductAdd: () => void;
}

export default function ProductAdd({ onProductAdd }: FormProps) {
  const [newProduct, setNewProduct] = useState<IProduct>({});
  const [errorMessage, setErrorMessage] = useState<String>();

  function onProductAddClick() {
    setErrorMessage(undefined);
    try {
      if (!newProduct.name) {
        setErrorMessage("enter product name");
        throw new Error("enter product name");
      }
      fetch("/api/products", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              response.url + " " + response.status + " " + response.statusText
            );
          }
          onProductAdd();
        })
        .catch((error: Error) => {
          console.log(error.message);
          setErrorMessage(error.message);
        });
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <div className="propertytable">
        <p className="errorMessage">{errorMessage}</p>
        <p>
          <b>new product</b>
        </p>

        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
      <button onClick={onProductAddClick} className="button">
        add
      </button>
      <button onClick={onProductAdd} className="button">
        cancel
      </button>
    </>
  );
}
