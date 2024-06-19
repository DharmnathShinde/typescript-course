import {type ReactNode } from "react"
import '../App.css'
interface goal{
    tittle:string,children:ReactNode
}
export default function Goal({tittle,children}:goal){
    return<>
    <article>
      <div >  <h2 >{tittle}</h2>
        {children}
        </div>
        <button>delete</button>
    </article>
    </>
}