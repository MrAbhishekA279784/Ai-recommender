function ProductCard(props){

return(

<div style={{
border:"1px solid gray",
padding:"20px",
borderRadius:"10px",
textAlign:"center"
}}>

<h2>{props.product.name}</h2>

<p>{props.product.category}</p>

<p>${props.product.price}</p>

<p>{props.product.description}</p>

</div>

)

}

export default ProductCard