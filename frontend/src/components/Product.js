import Rating from "./Rating";

export default function Product(props){
    const {product} = props;
    return (
        <div key={product._id} className="card">
                <a href={`/product/${product.id}`}>
                    <img className="medium" src={product.image} alt={product.name}/>
                </a>
                <div className="card-body">
                <a href={`/product/${product.id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <Rating
                    <div className="price">
                        {product.price}€
                    </div>
                </div>
            </div>
    )
}