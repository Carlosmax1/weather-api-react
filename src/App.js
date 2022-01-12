import { useState } from 'react'

function Contador(){

  const [contador, setContador] = useState(1);

  function addContador(){
    setContador(contador + 1);
  }

  return(
    <div>
      <div>{contador}</div>
      <button onClick={addContador}>Adicionar</button>
    </div>
  )
}

function Pagina(){
  return <Contador/>
}

export default Pagina