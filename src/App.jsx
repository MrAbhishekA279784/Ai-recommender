import {useState} from "react"
import products from "./data/products"
import ProductCard from "./components/ProductCard"

function App(){

const [text,setText]=useState("")
const [items,setItems]=useState([])

const getData=()=>{

let value=text.toLowerCase()

let result=products

if(value.includes("phone")){

result=products.filter((p)=>p.category==="Phone")

if(value.includes("500")){
result=result.filter((p)=>p.price<=500)
}

}

else if(value.includes("laptop")){

result=products.filter((p)=>p.category==="Laptop")

}

else if(value.includes("headphone")){

result=products.filter((p)=>p.category==="Headphones")

}

setItems(result)

}

return(
<div style={{padding:"30px"}}>

<h1>AI Product Recommendation System</h1>

<input
type="text"
placeholder="I want a phone under $500"
value={text}
onChange={(e)=>setText(e.target.value)}
style={{
padding:"10px",
width:"300px",
marginRight:"10px"
}}
/>

<button onClick={getData}>
Get Recommendations
</button>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"20px",
marginTop:"30px"
}}
>

{items.map((item,index)=>(
<ProductCard key={index} product={item}/>
))}

</div>

</div>
)

}

export default App