import { completedData } from "../data/completedData";

type Complete ={
    user: string;
    car: string;
    date: string;
}
export default function SummaryTable({user, car, date}:Complete ) {
   return (
   <div className="w-1/4 p-4 m-8 ml-4 bg-gray-200 border rounded-md shadow-md hover:scale-110 h-1/4 text-cyan-700">
    <h2>{user}</h2>
    <p>{car}</p>
    <p>{date}</p>
   </div>
   )
}