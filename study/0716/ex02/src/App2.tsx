import { useState } from 'react';
import { useEffect } from 'react';

function App2() {
  const [count,setCount] = useState(0);

// useEffect(() =>{
//   console.log("useEffect 실행")
//   setTimeout(()=>{alert("ㅎㅇㅎㅇ")},3000)
// },[]);

useEffect(() =>{
  console.log("useEffect 실행",count)
},[count]);



const countUp = () => {
  setCount(count+1)
}

  return(
    <div>
<h2>useEffect</h2>
<button onClick={countUp}>카운트 증가 {count}</button>
    </div>
  )
}
export default App2;
