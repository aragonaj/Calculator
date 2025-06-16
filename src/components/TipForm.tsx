import type { Dispatch,SetStateAction } from "react";

export const tipOptions = [
    {
      "id": "tip-10",
      "value": 10,
      "label": "10%"
    },
        {
      "id": "tip-20",
      "value": 20,
      "label": "20%"
    },
    {
      "id": "tip-50",
      "value": 50,
      "label": "50%"
    }
]
type tipOptions = {
    id: string,
    value: number,
    label: string
}

type TipFormProps = {
    tip: number;
    setTip:Dispatch<SetStateAction<number>>;
}




export default function TipForm({tip,setTip}: TipFormProps) {

    return (
       <div className="space-y-5  border-gray-200 border-t pt-5" >
        <h3 className="font-black text-2xl">Propina</h3>

        <form>
        {tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex items-center gap-2">
                <label>{tipOption.label}</label>
                <input id={tipOption.id}
                value={tipOption.value}
                type="radio"
                checked={tip === tipOption.value}
                onChange={() => setTip(tipOption.value)}
                />
            
          
            </div>
            
        ))}
        </form>

        </div> 
    )





}