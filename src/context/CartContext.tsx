import { createContext, useContext, useState } from "react";

// типизация элемента корзины
export interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизация контекста в корзине
interface ICartContextType {
  // корзина
  cart: ICartItem[];
  // добавление элемента
  addToCart: (product: ICartItem) => void;
  // удаление элемента
  removeFromCart: (id: number) => void
  // очистка корзины
  clearCart: () => void;
}


// * 1. делаем контекст с помощью встроенного в react метода createContext()
export const CartContext = createContext<ICartContextType | undefined>(undefined)



// * 2. обертка для компонентов нашего приложения дающая доступ к данным контекста
export const CartProvider = ({children}: {children: React.ReactNode}) => {
  // переменная состояния для контекста
  const [cart, setCart] = useState<ICartItem[]>([])

  // добавление продукта в корзину
  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      // проверка на наличие продукта в корзине
      const productExist = prevCart.find(item => item.id === product.id)
      if (productExist) {
        // если такой продукт уже есть мы у него увеличиваем quantity на 1
        return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item)
      }
      // если такого продукта нет, то мы его добавляем и в значении quantity указываем 1
      return [...prevCart, {...product, quantity: 1}]
    })
  }

  // удаление продуктов из корзины
  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  // очистка продуктов из корзины
  const clearCart = () => {
    setCart([])
  }

  return (
    // за место children придут обернутые в компонент элементы
    // за счет контекста эти элементы получат доступ к данным в этом компоненте
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

// ! функция для получения жанных из контекста
// создаем здесь, но используем в компонентах
// проверяет данные на undefined

export const useCart = () => {
    const contextData = useContext(CartContext)
    if (!contextData) {
        throw new Error('no such context 🤦‍♂️')
    }
    return contextData;
}