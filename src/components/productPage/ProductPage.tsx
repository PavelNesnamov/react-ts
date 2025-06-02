// import styles from './ProductPage.module.css'
import { useEffect, useState, type JSX } from 'react';
import { Link, useParams } from "react-router-dom";
import type { IProduct } from "../products/types";
import Loader from "../loader/Loader";

const initialState: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage(): JSX.Element {
  // получаем id из адресной строки
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initialState);

  useEffect(() => {
    // подгружаем данные по конкретному продукту
    setTimeout(()=> {
      fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, 1500)
  }, [id]);
  return (
    <div>
      {product.title ? (
        <>
          <h2>{product.title}</h2>
          <h3>Rating: {product.rating.rate} | Price: {product.price}€</h3>
          <p>{product.description}</p>
          <img src={product.image} alt="" width={280} />
          <div>
            <Link to='/Dynamic-routing'>Back to products</Link>
          </div>
        </>
      ) : <Loader />}

    </div>
  );
}