// import styles from './StorePage.module.css'
import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type { IProduct } from "../types";

const initialState: IProduct = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  tags: [],
  brand: "",
  sku: "",
  weight: 0,
  dimensions: {
    width: 0,
    height: 0,
    depth: 0,
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  reviews: [],
  returnPolicy: "",
  minimumOrderQuantity: 0,
  meta: {
    createdAt: "",
    updatedAt: "",
    barcode: "",
    qrCode: "",
  },
  images: [],
  thumbnail: "",
};

export default function StorePage(): JSX.Element {
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>({ initialState });

  useEffect(() => {
    setTimeout(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => setProduct(data));

    }, 1500)
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <h3>Price: {product.price}</h3>
      <h4>Rating: {product.rating.rate}</h4>
        <p>{product.description}</p>
      <img src={product.images} alt="" width={280} />
      <div>
        <Link to='/Dynamic-routing-test'>Back to products</Link>
      </div>
    </div>
  );
}
