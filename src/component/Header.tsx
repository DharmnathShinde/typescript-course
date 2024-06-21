type img={
    image:{
    src:string,
    alt:string
    }
}
export default function header({image}:img){
return(
    <header>
        <img {...image}style={{width:"100px",borderRadius:"50px"}} />
    </header>

)

}