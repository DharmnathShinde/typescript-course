import React, { useState, type ReactNode } from "react";
import '../App.css';

interface Goal {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Goal({ image, children }: Goal) {
    const [comment,setComment]=useState([])
  function controller(){
   setComment(prevCount =>{

   })
  }

  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
