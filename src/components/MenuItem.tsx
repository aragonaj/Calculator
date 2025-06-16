
import type {MenuItem,MenuItemProps} from '../types';


export default function MenuItem ({item,addItem}: MenuItemProps) {

return (
    
    <button className="border-2 border-teal-400 hover:bg-teal-200 
    p-3 text-lg rounded-lg flex justify-between w-full" onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p>{item.price} €</p>
    </button>
    


)




}