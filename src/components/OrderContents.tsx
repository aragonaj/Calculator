import type {OrderContentsProps } from "../types";

export default function OrderContents({order,removeItem}:OrderContentsProps) {
    return (
        <div className="">
            <h2 className="font-black text-4xl mb-3">Consumo</h2>
            
            { order.map(item => (
                <div key = {item.id} className="flex justify-between  items-center border-t border-gray-200 py-5 last-type:border-b">
                    <div>
                        <p className="text-lg"> {item.name} - {item.price} € </p>
                        
                        <p className="font-black">Cantidad: {item.quantity} - {item.price*item.quantity} €  </p>
                    </div>
                    <button 
                        className="bg-red-600 text-white h-8 w-8 rounded-full font-black"
                        onClick={() => removeItem(item.id)}
                        >
                            X
                        </button>
                </div>
            ))}
        </div>
    )
}
