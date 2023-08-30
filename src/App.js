import { useEffect, useState } from 'react';

function App() {

    const [ listatarefas, setlistaTarefas] = useState([]);
    const [ tarefa, setTarefa ] = useState({id: '', texto:"", status: ""});

    function addTarefa(){

        if( tarefa.texto !== "")
        setlistaTarefas([...listatarefas, tarefa]);

    }
    function excluirtarefa(id)
    {
      const novalista = listatarefas.filter((tarefa) => tarefa.id !== id);
      setlistaTarefas(novalista);
    }
    function statustarefa(id, status){
     const index = listatarefas.findIndex((tarefa) => tarefa.id === id);
     const novoStatus = status;
     listatarefas[index].status = !status;
      setlistaTarefas([...listatarefas]);
    }
      useEffect(() => {
        setTarefa({id:"", texto:"", status: "não concluida"});
      }, [listatarefas])
  return (
    <>
    <header>
      <h1>React DO</h1>
    </header>
      <div>
        <input onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false})} type='text' name='tarefa' value={tarefa.texto} placeholder='Digite sua tarefa'/>
        <button  onClick={addTarefa}>Adicionar</button>
      </div>
        <div>
          <ul>
            {listatarefas.map( (item, index) => (
              <li key={index}>{item.texto} <button onClick={() => statustarefa(item.id, item.status)}>{item.status ? 'concluida' : 'não concluida'}</button> <button onClick={() => excluirtarefa(item.id)}>Excluir</button></li>
            ))}
          </ul>
        </div>
    </>
  );
}
export default App;
