import { useState } from 'react';
import './App.css';

function App() {

  const [bg,background]=useState(null)
  const [count, setCount] = useState(3);  
  const [count2, setCount2] = useState(7);  

  const [result, setResult] = useState(null); 

   const handleAdd = () => {
    setResult(count + count2);
  };

  const handleSub = () => {
    setResult(count - count2);
  };

  const handleDivide = () => {
    setResult(count / count2);
  };

  const handleMultiply = () => {
    setResult(count * count2);
  };
 
  return (
    <>
      <div className='flex justify-center items-center flex-col h-[100vh] bg-neutral-200 text-3xl'>
        <h1>:الأرقام</h1>
        <p>العدد الأول: {count}</p>
        <div className='flex'>
   <button onClick={()=>{
          setCount(count-1)
        }}>-</button>
          <button onClick={()=>{
          setCount(count+1)
        }}>+</button>

        </div>
     
        <p>العدد الثاني: {count2}</p>

        <div className='flex'>
    <button onClick={()=>{
          setCount2(count-1)
        }}>-</button>
          <button onClick={()=>{
          setCount2(count+1)
        }}>+</button>

        </div>
    
        <h2>النتيجة: {result !== null ? result : 'لا توجد نتيجة بعد'}</h2>

        <hr />
<div className='flex justify-around w-[50vh]'>
        <button className='border border-black p-3' onClick={handleAdd}>جمع</button>
        <button className='border border-black p-3' onClick={handleSub}>طرح</button>
        <button  className='border border-black p-3' onClick={handleDivide}>قسمة</button>
        <button className='border border-black p-3' onClick={handleMultiply}>ضرب</button>
</div>
        <hr />

      </div>
    </>
  );
}

export default App;
