import React, { useState } from 'react'
import './count.css'
const count = () => {

    const [count1, setCount] = useState(0)
    const[toggle,setToggle]=useState(false);
    const[index,setindex]=useState(false);
    const[index1,setindex1]=useState(true);
    const[heroIndex,setheroIndex]=useState(false);
    const handle=()=>{
        setToggle(!toggle);
    }
    const popUp=()=>{
      setindex(!index);
    } 
    const popUp1=()=>{
      setindex1(!index1);
 }
    const popUpHero=()=>{
      setheroIndex(!heroIndex)
    }
   
    function update(){
      if(count1==20||count1==200){
        popUp1(false)
      }
    if(count1==10||
      count1==100||count1==1000){ 
       popUpHero(true)
         popUp1(false)}
        if(count1<=10){setCount(count1+1)}
       if(count1>=10){setCount(count1+10)}
       if(count1>=100){setCount(count1+100)}
       if(count1>=1000){setCount(count1)
        handle(true)}
      
    }
    const updateDown =()=>{ if(count1==90){
      popUp1(false)
    }
      if(count1==10||count1==100||count1==1000){ 
        popUpHero(true)
        popUp1(false)
        }
          if(count1<=10){setCount(count1-1)} 
          if(count1<=100&&count1>10){setCount(count1-10)}
          if(count1<=1000&&count1>100){setCount(count1-100)}       
          if(count1==0){setCount(count1+1)
           handle(true)
   }
           
        
          
          
    }
  
   
    
    
 
  return (<>
 
    <div className={ heroIndex?'OS1-Hero':'OS-Hero'}>
      <div className={index? "pop-up":"popUp"}>
        <h1>welcome the pages</h1>
         <button onClick={popUp}>cancel</button>
      </div>
      <div className={index? "OsCountShow":"OsCount"}>
        <button className={toggle ?"countup":""}  onClick={update}> Count Up</button>
        <button className={toggle?"":"countDown"} onClick={updateDown}>Count Down</button>
           <h1> count is {count1} </h1>
            <div className={index1?"pop-count":"popCount"}  >
              <h1>The Number is 10 or 100 or 1000</h1> </div>
              </div>
  
    </div>
    </>
  )
}

export default count



