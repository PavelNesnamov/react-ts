import { NavLink, Outlet } from "react-router-dom";
import styles from './Layout.module.css';
import { useCart } from "../context/CartContext";
import { getTotalPrice } from "../components/cart/Cart";

const navLinks = [
  { to: '/', title: 'Home' },
  { to: 'fetch-fox', title: 'Fetch fox' },
  { to: 'feedback', title: 'Feedback' },
  { to: 'form-gender', title: 'Gender form' },
  { to: 'products', title: 'Products' },
  { to: 'cart', title: 'Cart' },
];

export default function Layout() {

  const { cart } = useCart();

  return (
    <>
      <header className={styles.header}>
        {navLinks.map((el, index) => (
          <NavLink key={index} className={({ isActive }) => (isActive ? styles.isActive : '')} to={el.to}>{el.title}</NavLink>
        ))}
        <h3>{getTotalPrice(cart)}€</h3>
      </header>
      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}