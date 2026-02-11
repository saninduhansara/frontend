import ProductCard from "./productCard";

export default function SuperProduct(){

    return(
        <div>
           <h1>featured products</h1> 
           <ProductCard
                name= "new super" 
                price= "200000"
                image= "https://picsum.photos/id/237/200/300"/>
        </div>
    ) 
}