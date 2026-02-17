export function getCart(){

    let cartInString = localStorage.getItem("cart")

    if(cartInString == null){
        cartInString = "[]"
        localStorage.setItem("cart",cartInString)
    }
    const cart = JSON.parse(cartInString)
    return cart

}

export function addToCart(product, qty){
    const cart = getCart()
    const existingProductIndex = cart.findIndex((item)=>{
        return item.productId == product.productId

    })

    if(existingProductIndex == -1){
        cart.push(
            {
                productId: product.productId,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity: qty,
                altNames: product.altNames
            }
        )
        localStorage.setItem("cart",JSON.stringify(cart))

    }

    else{
        const newQty = cart[existingProductIndex].quantity + qty
        if (newQty <=0){
            const newCart = cart.filter((item, index)=>{
                return index != existingProductIndex
            })
            localStorage.setItem("cart",JSON.stringify(newCart))
        }
        else{
            cart[existingProductIndex].quantity = newQty
            localStorage.setItem("cart",JSON.stringify(cart))
        }
    }
            
        
}

export function getTotal(){
    const cart = getCart()
    let total = 0
    cart.forEach((item)=>{
        total += item.price * item.quantity
    })
    return total
}