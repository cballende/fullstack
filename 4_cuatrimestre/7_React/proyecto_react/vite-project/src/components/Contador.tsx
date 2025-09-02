import Titulo from "./Titulo";

export default function Contador() {
  const [count, setCount]=useState(0);
  //logica
  function sumar(){
    console.log("Llamado a sumar!");
    setCount(count +1 );
  }
  function restar(){
    console.log("Llamado a sumar!");
    setCount(count - 1 );
  }
  function reset(){
    console.log("Llamado a sumar!");
    setCount(0);
  }
  // retorno

  return (
    <>
      <Titulo></Titulo>
      <h1>{count}</h1>
      <button onClick={sumar}>SUMAR</button>
      <button onClick={restar}>RESTAR</button>  
      <button onClick={reset}>RESETEAR</button>
    </>
  )
}