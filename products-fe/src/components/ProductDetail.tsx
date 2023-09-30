import { IProduct } from "../model/IProduct";
import "./ProductDetail.css";

interface FormProps {
  product?: IProduct;
  className;
}

export default function ProductDetail({ product, className }: FormProps) {
  let productDetailDiv;
  if (product) {
    productDetailDiv = (
      <div className={className}>
        <p>
          <b>product detail</b>
        </p>
        <table className="propertytable">
          <tr>
            <td>id:</td>
            <td>{product && product.id}</td>
          </tr>
          <tr>
            <td>name:</td>
            <td>{product && product.name}</td>
          </tr>
          <tr>
            <td>price:</td>
            <td>{product && product.price}</td>
          </tr>
          <tr>
            <td>description:</td>
            <td>{product && product.description}</td>
          </tr>
        </table>
      </div>
    );
  }

  return productDetailDiv;
}
