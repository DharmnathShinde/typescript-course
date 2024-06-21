
import '../App.css';
interface heading {
  id:number,
  tittle:string,
  description:string,
  ondelete:(id:number)=>void

}

export default function Goal({tittle,description,ondelete,id}:heading
) {
  return (
   <article >
    <div>
      <h2>{tittle}</h2>
      <p>{description}</p>
     
    </div>
    <button onClick={()=>ondelete(id)}>delete</button>
   </article>
  );
}
