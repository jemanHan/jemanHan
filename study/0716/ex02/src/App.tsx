import React from 'react';
import logo from './logo.svg';
import './App.css';
import GreetingPage from './pages/GreetingPage';
import ProductListPage from './pages/ProductListPage';
import ApplyScrapPage from './pages/ApplyScrapPage';
import QuotationPage from './pages/QuotationPage';
import SummaryTable from './components/SummaryTable';
import ScrapComplelePage from './pages/ScrapCompletePage';
import { useState } from 'react';

function App() {
  //=========================================
  const [stage, setStage] = useState(1);

  const [count, setCount] = useState(0);

  const [name, setName] =useState('')

  const [dark,setDark] = useState(false)

  const [num, setNum] = useState(0);

  const [items, setItems] = useState<string[]>([]);

  const [checked, setChecked] = useState(false);

  const [user, setUser] = useState({ name: '강감찬', age: 0 });

  const [tab, setTab] = useState<'home' | 'about' | 'contact'>('home');

  const [num1, setNum1] = useState(0);

  const [count1, setCount1] = useState(0);
 //===========================================
  const prevStage = () => {
setStage(stage - 1)
  }
  const nextStage = () => {
setStage(stage + 1)
  }
//================================================
  const countUp = () => {
    setCount(count+1)
  }
   const countDown = () => {
    setCount(count-1)
  }
//==================================================


  return (
    <div>
    <button className='p-4 m-4 font-bold text-black bg-blue-500 border rounded-lg hover:scale-110' onClick={prevStage}>이전</button>
    <button className='p-4 m-4 font-bold text-black bg-blue-500 border rounded-lg hover:scale-110' onClick={nextStage}>다음</button>
   <hr /><hr /><hr />{/*======================================================================== */}
    <div>
    <button className='p-6 m-6 font-bold text-black bg-yellow-100 border rounded-lg hover:scale-110' onClick={countDown}>카운트 감소 {count}</button>
    <button className='p-6 m-6 font-bold text-black bg-yellow-100 border rounded-lg hover:scale-110' onClick={countUp}>카운트 증가 {count}</button>
</div>
<hr /><hr /><hr />{/*======================================================================== */}
<div>
 <input value={name} onChange={(e) => setName(e.target.value)} />
 
 <p> 연습 2 안녕 {name}</p>
 <hr /><hr /><hr />
 
<button onClick={() => setDark(!dark)}>연습 3 테마: {dark ? '다크':'라이트'}</button>
 <hr /><hr /><hr /> {/*======================================================================== */}
<div>
 
  <p>연습 4</p>
<button className='p-3 m-3 font-bold text-black bg-yellow-100 border rounded-lg hover:scale-110'onClick={() => setNum(num - 1)}>-</button>
<span>{num}</span>
<button className='p-3 m-3 font-bold text-black bg-yellow-100 border rounded-lg hover:scale-110' onClick={() => setNum(num + 1)}>+</button>
</div>
 <hr /><hr /><hr /> {/*======================================================================== */}

<p>연습 5</p>
<input onKeyDown={(e) => {
  if (e.key === 'Enter') setItems([...items, e.currentTarget.value]);
}} />
<ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
<hr /><hr /><hr />

<p>연습 6</p>
<input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
<label>{checked ? '체크됨' : '체크 안됨'}</label>
<hr /><hr /><hr /> {/*======================================================================== */}

<p>연습 7</p>
<input onChange={(e) => setUser({ ...user, name: e.target.value })} />
<input type="number" onChange={(e) => setUser({ ...user, age: +e.target.value })} />
<p>{user.name} ({user.age}세)</p>
<hr /><hr /><hr /> {/*======================================================================== */}
<p>연습 8</p>
<button className='border' onClick={() => setTab('home')}>홈</button>
<button className='border' onClick={() => setTab('about')}>소개</button>
<button className='border' onClick={() => setTab('contact')}>연락처</button>
<div>현재 탭: {tab}</div>
<hr /><hr /><hr /> {/*======================================================================== */}
<p>연습 9</p>
<button onClick={() => setNum1(Math.floor(Math.random() * 100))}>랜덤 생성</button>
<p>숫자: {num1}</p>
</div>
<hr /><hr /><hr /> {/*======================================================================== */}
<p>연습 10</p>
<button onClick={() => setCount1(count1 + 1)}>+1</button>
<button onClick={() => setCount1(0)}>초기화</button>
{count1}
<hr /><hr /><hr /> {/*======================================================================== */}



    {/* <ProductListPage/> */}
    {stage ===1 && <GreetingPage/>}
    {stage ===2 && <ApplyScrapPage/> }
    {stage ===3 && <QuotationPage/>}
    {stage ===4 &&<ScrapComplelePage/>}
  
    </div>
  );
}

export default App;
