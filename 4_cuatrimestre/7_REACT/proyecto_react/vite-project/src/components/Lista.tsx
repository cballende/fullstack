export default function Lista() {
  const [count, setCount]=useState(0);
  //logica
  
  // restorno

  return (
    <>  
      <h2>Lista</h2>
      <button onClick={sumar}>SUMAR</button>
      <button onClick={restar}>RESTAR</button>  
      <button onClick={reset}>RESETEAR</button>
    </>
  )
}