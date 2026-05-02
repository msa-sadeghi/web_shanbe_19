import "../assets/css/Card.css"

function Card({product}){

    return(
        <div className="card">
            <h2>{product.name}</h2>
            <h3>price: {product.price}</h3>
            <h4>details {product.details}</h4>
            <button>Remove</button>
        </div>
    )
}

export default Card