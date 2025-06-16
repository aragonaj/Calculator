
import type {OrderTotalsProps} from "../types"    




export default function OrderTotals({order,tip,payment}: OrderTotalsProps) {
    const subtotalAmount = order.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    );
    const totalTip = subtotalAmount * tip / 100; // Calculate the tip based on the 
    const totalAmount = subtotalAmount + totalTip; // Total amount including tip

    return (
        <>
            <div className="space-y-3  border-gray-200 border-t pt-5">
            <h2 className="font-black text-4xl mb-3">Totales y Propina</h2> 
                <p>Subtotal a pagar : {""}
                    <span className="font-black">{subtotalAmount} €</span   >
                </p>
                <p>Propina: {""}
                    <span className="font-black">{totalTip} €</span>
                </p>
                <p>Total a pagar: {""}
                    <span className="font-black">
                        {totalAmount} €
                    </span>
                </p>

            </div>
            <button className="bg-black uppercase text-white p-3 mt-10 font-bold w-full" 
            onClick={payment}
            >
                    Pagar
            </button>
        </>


)



}