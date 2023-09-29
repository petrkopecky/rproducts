import { IProduct } from "../model/IProduct";

interface FormProps {
  product?: IProduct;
}

export default function ProductDetail({ product }: FormProps) {
  return <div>product detail {product && product.id}</div>;
}
