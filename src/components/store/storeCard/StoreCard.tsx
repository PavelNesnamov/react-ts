import styles from './StoreCard.module.css'
import { useEffect, useState, type JSX } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IProduct } from '../types';
import Loader from '../../loader/Loader';

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  images: [string];
}


export default function StoreCard({id, title, price, images}:IProductCardProps):JSX.Element {

const { id } = useParams();
const [product , setProduct] = useState<IProduct>(initialState);

useEffect(() => {
    setTimeout(() => {
        fetch(`https://dummyjson.com/products?limit=2` + id)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, 1000)
}, [id])

  return (
    <Link to={String(id)}>
    <div className={styles.shopContainerCard}>
        {product.title ? (
            <>
            <h2>{product.title}</h2>
            <h4>{title.length < 20 ? title.slice(0, 20) + '...'}</h4>
            <h3>Rating: {product.rating.rate} | Price: {product.price}€</h3>
            <p>{product.description}</p>
            <img src={product.images[0]} alt="" width={280} />
            <div>
                <Link to='/Dynamic-routing-test'>Back to products</Link>
            </div>
            </>
        ) : <Loader />}
    </div>
    </Link>
  )
}