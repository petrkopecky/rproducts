import "./ProductAdd.css";
interface FormProps {
  onProductAdd: () => void;
}

export default function ProductAdd({ onProductAdd }: FormProps) {
  return (
    <>
      <p>
        <b>new product</b>
      </p>
      <button onClick={onProductAdd} className="button">
        add
      </button>
      <button onClick={onProductAdd} className="button">
        cancel
      </button>
    </>
  );
}
