import QuotationCard from "../components/QuotationCard";
import { quotationMock } from "../data/quotationMock";

export default function QuotationPage(){
    return(
        <main className="">
{quotationMock.map((item)=>
 (<QuotationCard carName={item.carName} year={item.year} price={item.price}/>
))}
        </main>
    )
}