import React from 'react';
import './BackTop.css';
import { useEffect,useState } from 'react';
const BackTop=()=>{

  const [BackTop, setBackTop]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>300){
        setBackTop(true)
      }
      else{
        setBackTop(false)
      }
    })
  },[])
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return(
    <div>
    {BackTop && (
      <button className='totop' onClick={scrollToTop}>
        <img src="/images/up-arrow-alt-regular-24.png"/>
      </button>

    )}
    </div>
  )
  

}
export default BackTop