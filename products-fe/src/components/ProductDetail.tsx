import { IProduct } from "../model/IProduct";

interface FormProps {
  product?: IProduct;
}

export default function ProductDetail({ product }: FormProps) {
  let productDetailDiv;
  if (product) {
    productDetailDiv = (
      <div>
        <p>product detail</p>
        <p>id:{product && product.id}</p>
        <p>name:{product && product.name}</p>
        <p>price:{product && product.price}</p>
        <p>description:{product && product.description}</p>
      </div>
    );
  }

  return productDetailDiv;
}
