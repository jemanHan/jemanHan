// itcr 임타클반

import { quotationMock } from "../data/quotationMock";

type Quotation = {
    carName: string;
    year: number;
    price: number;
}
export default function QuotationCard({carName, year, price}:Quotation ) {
   return (
   <div className="w-1/4 p-4 m-8 ml-4 bg-gray-200 border rounded-md shadow-md hover:scale-110 h-1/4 text-cyan-700">
    <h2>{carName}</h2>
    <p>{year}</p>
    <p>{price}</p>
   </div>
   )
}