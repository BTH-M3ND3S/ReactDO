import { useEffect, useState } from 'react';

function App() {

    const [ listatarefas, setlistaTarefas] = useState([]);
    const [ tarefa, setTarefa ] = useState({id: '', texto:""});

    function addTarefa(){

        if( tarefa.texto !== "")
        setlistaTarefas([...listatarefas, tarefa]);

    }
    function excluirtarefa(id)
    {
      const novalista = listatarefas.filter((tarefa) => tarefa.id !== id);
      setlistaTarefas(novalista);
    }

      useEffect(() => {
        setTarefa({id:"", texto:""});
      }, [listatarefas])
  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>
      <div>
        <input onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value})} type='text' name='tarefa' value={tarefa.texto} placeholder='Digite sua tarefa'/>
        <button  onClick={addTarefa}>Adicionar</button>
      </div>
        <div>
          <ul>
            {listatarefas.map( (item, index) => (
              <li key={index}>{item.texto}<button onClick={() => excluirtarefa(item.id)}>Excluir</button></li>
            ))}
          </ul>
        </div>
    </>
  );
}
export default App;
