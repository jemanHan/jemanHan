import SummaryTable from "../components/SummaryTable"
import { completedData } from "../data/completedData"


export default function ScrapComplelePage(){
    return(
        <main className="">
{completedData.map((item)=>
 (<SummaryTable user={item.user} car={item.car} date={item.date}/>
))}

        </main>
    )
}