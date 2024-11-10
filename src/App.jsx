import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);
  let val = useRef(0);
  
  function startWatch(){
      val.current =  setInterval(()=>{
        setSeconds(seconds=>seconds+1);
        console.log("Time is going on ");
       },1000);
  }

  function resetWatch(){
      
      setSeconds(0);
      clearInterval(val.current);
      val.current=0;
      console.log("watch reset");
  }

  function stopWatch(){
     
     
      clearInterval(val.current);
      console.log("Stop cliked ");
  }



  return (
    <>
    
    <h1>Stop Watch : {seconds} sec </h1>
  
    <button style={{margin:"10px"}} onClick={startWatch}>Start</button>
    <button style={{margin:"10px"}} onClick={stopWatch}>Stop</button>
    <button style={{margin:"10px"}} onClick={resetWatch}>Reset</button>  
   
    </>
  )
}

export default App
