import { useState } from "react"
import Card from "./Card.jsx"
import "../assets/css/Card.css"
function ProductList(){
    const [items, setItems] = useState([
        { id: 1, name: 'لپ‌تاپ', price: 25000000, details:'asus laptop' },
        { id: 2, name: 'گوشی', price: 15000000, details:'iphone 17' },
        { id: 3, name: 'تبلت', price: 10000000, details:'surface 11' }
    ])
    const [productName, setProductName] = useState('')
    const handleAdd = ()=>{
        const  newProduct={
            id:Date.now(),
            name:productName,
            price:0,
            details:""
        }
        setItems(prev=>([...prev, newProduct]))
        setProductName('')
    }
    const removeItem=(id)=>{
        setItems(prev=> prev.filter((item)=>item.id !== id))
    }
    return(
        <div
        style={{
            display:'flex',
            flexDirection:"column"
        }}
        >
            <input 
            onChange={(e)=>setProductName(e.target.value)}
            style={{padding:"10px 30px", marginBottom:'10px', borderRadius:'12px'}}
            type="text" />
            <div className="buttons">

            <button onClick={handleAdd}>Add</button>
            <button>Search</button>
            </div>
            
            {
                items.map(item=>(
                    <Card product={item} key={item.id} onRemove = {removeItem}/>
                ))
            }
        </div>
    )
}

export default ProductList