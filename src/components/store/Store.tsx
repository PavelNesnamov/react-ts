import styles from "./Store.module.css";
import { useEffect, useState, type JSX } from "react";
import type { IProduct } from "./types";

export default function Store(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.shopContainer}>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
}
