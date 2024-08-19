import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [runing, setRuning] =useState(false);


  useEffect(() => {
    let interval;
    if(runing){
      interval = setInterval(()=>{
        setTime((prevTime)=> prevTime +10);
      },10);
    }
    else if(!runing){
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  }, [runing]);

  return (
    <>
     <div className='w-full flex flex-col justify-center py-8  items-center'>
     <h1  className='text-3xl font-semibold pb-2 items-center'>Stopwatch</h1>
       <div className='text-xl font-semibold  items-center'>
        <span>{("0"+Math.floor((time / 60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time / 1000)%60)).slice(-2)}:</span>
        <span>{("0"+((time / 10)%100)).slice(-2)}</span>
       </div>
       <div className='flex flex-row justify-between '>
        {runing? (<button className='border bg-slate-300 mx-5 rounded-xl p-3 hover:bg-slate-500' onClick={()=>{setRuning(false)}}>Stop</button>):
        <button className='border bg-slate-300 mx-5 rounded-xl p-3 hover:bg-slate-500' onClick={()=>{setRuning(true)}}>Start</button>}
        <button className='border bg-slate-300 mx-5 rounded-xl p-3 hover:bg-slate-500' onClick={()=>{setTime(0)}}>Reset</button>
       </div>
     </div>
    </>
  )
}

export default App
