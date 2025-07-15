import {useClock} from './hooks'
import { useState, useEffect } from 'react'

import Clock from './pages/Clock'

// export default function App() {
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
  
//   return(
// <div className='flex flex-row items-center'>
//   <h2>{"덧셈기"}</h2>
// <div>
// <input type="number" value={number1} onChange={(e)=>setNumber1(parseInt(e.target.value))} />
// <span>{" + "}</span>
// <input type="number" value={number2} onChange={(e)=>setNumber2(parseInt(e.target.value))} />
// </div>
// <h2>결과: {`${number1} + ${number2} = ${number1 + number2}`}</h2>
// </div>
//   )
// }
// 원본 내용임~~
export default function App() {
  const today = useClock()
  return <Clock today={today} />
} 



