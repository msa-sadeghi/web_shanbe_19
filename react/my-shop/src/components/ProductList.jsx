import { useState } from "react"
import Card from "./Card.jsx"
import "../assets/css/Card.css"
function ProductList(){
    const [items, setItems] = useState([
        { id: 1, name: 'لپ‌تاپ', price: 25000000, details:'asus laptop' },
        { id: 2, name: 'گوشی', price: 15000000, details:'iphone 17' },
        { id: 3, name: 'تبلت', price: 10000000, details:'surface 11' }
    ])

    return(
        <div
        style={{
            display:'flex',
            flexDirection:"column"
        }}
        >
            <input 
            style={{padding:"10px 30px", marginBottom:'10px', borderRadius:'12px'}}
            type="text" />
            <button>Add</button>
            {
                items.map(item=>(
                    <Card product={item}/>
                ))
            }
        </div>
    )
}

export default ProductList