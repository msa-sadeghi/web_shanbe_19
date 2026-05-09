import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>فروشگاه آنلاین</h1>
      <ProductList />
    </div>
  )
}

function ProductList() {
  const products = [
    {
      id: 1,
      name: 'لپ‌تاپ اپل MacBook Pro',
      price: 35000000,
      image: 'laptop.jpg',
      inStock: true,
      colors: ['نقره‌ای', 'خاکستری فضایی']
    },
    {
      id: 2,
      name: 'گوشی سامسونگ Galaxy S24',
      price: 18000000,
      image: 'phone.jpg',
      inStock: true,
      colors: ['مشکی', 'سفید', 'آبی']
    },
    {
      id: 3,
      name: 'تبلت اپل iPad Air',
      price: 20000000,
      image: 'tablet.jpg',
      inStock: false,
      colors: ['نقره‌ای', 'رزگلد']
    }
  ]
  
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product.colors)
  const [inCart, setInCart] = useState(false)
  
  const handleAddToCart = () => {
    if (product.inStock) {
      setInCart(true)
      alert(`${quantity} عدد ${product.name} به سبد خرید اضافه شد`)
    }
  }
  
  const totalPrice = product.price * quantity
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && (
          <div className="out-of-stock-badge">ناموجود</div>
        )}
      </div>
      
      <h3>{product.name}</h3>
      
      <p className="price">
        {product.price.toLocaleString('fa-IR')} تومان
      </p>
      
      <div className="color-selector">
        <label>رنگ:</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          disabled={!product.inStock}
        >
          {product.colors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>
      
      <div className="quantity-selector">
        <label>تعداد:</label>
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={!product.inStock}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          disabled={!product.inStock}
        >
          +
        </button>
      </div>
      
      <p className="total">
        جمع: {totalPrice.toLocaleString('fa-IR')} تومان
      </p>
      
      {product.inStock ? (
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          {inCart ? '✓ در سبد خرید' : 'افزودن به سبد'}
        </button>
      ) : (
        <button className="notify-btn">
          اطلاع‌رسانی موجود شدن
        </button>
      )}
    </div>
  )
}

export default App