import { getCart } from "@/lib/db/cart"
import CartEntry from './CartEntry';
import setproductQuantity from "./actions";
import formatPrice from "@/lib/format";


export const metadata = {
    title: "My Cart"
}

export default async function Cartpage() {

    const cart = await getCart();

    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>
            {cart?.items.map(cartItem => (
                <CartEntry cartItem={cartItem} key={cartItem.id} setproductQuantity={setproductQuantity} />
            ))}

            {!cart?.items.length && <p>Empty Cart, Go ahead and add something</p>}

            <div className="flex flex-col items-end sm:items-center" >
                <p className="mb-3 font-bold">
                    Total: {formatPrice(cart?.subtotal || 0)}
                </p>
                <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </div>
        </div>


    )
}
