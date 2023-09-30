import "./ProductAdd.css";
interface FormProps {
  onProductAdd: () => void;
}

export default function ProductAdd({ onProductAdd }: FormProps) {
  function onProductAddClick() {
    fetch("/api/products", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Mobilni telefon",
        price: 14999.0,
        description: "skvely novy telefon",
      }),
    });
    onProductAdd();
  }

  return (
    <>
      <p>
        <b>new product</b>
      </p>
      <button onClick={onProductAddClick} className="button">
        add
      </button>
      <button onClick={onProductAdd} className="button">
        cancel
      </button>
    </>
  );
}
