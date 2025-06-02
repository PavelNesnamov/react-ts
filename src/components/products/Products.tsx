import styles from "./Products.module.css";
import { useEffect, type JSX } from "react";
// import type { IProduct } from "./types";
import ProductCard from "../productCard/ProductCard";
import Cart from "../cart/Cart";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadProducts } from "../../features/productAction";
import Loader from "../loader/Loader";

export default function Products(): JSX.Element {
  const { products, isLoading, error } = useAppSelector((store) => store.products);

  // const [products, setProducts] = useState<IProduct[]>([]);

  // const getProducts = async () => {
  //   const res = await fetch("https://fakestoreapi.com/products");
  //   const data = await res.json();
  //   setProducts(data);
  // };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <Cart />
      <div className={styles.shopContainer}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} />
            ))}
          </>
        )}
      </div>
      {error && <p>⚠️ Error: {error} ⚠️</p>}
    </>
  );
}
