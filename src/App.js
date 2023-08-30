import { useEffect, useState } from 'react';
import "./App.css"


function App() {

    const [ listatarefas, setlistaTarefas] = useState([]);
    const [ tarefa, setTarefa ] = useState({id: '', texto:"", status: ""});

    function addTarefa(event){

        if( tarefa.texto !== ""  && ( event.key == "Enter" || event == "click" ) )
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
    <div className='caixagigante'>
    <header>
        <h1 className='h1'><i class="fa-solid fa-mobile-screen-button"></i>Lista de Tarefas</h1>
    </header>
    <div className='container'>
      <div className='divizona'>
      <div>
        <input className='inputadicionar' onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false})} type='text' name='tarefa' value={tarefa.texto} placeholder='Digite sua tarefa' onKeyDown={ (e) => addTarefa(e) }/>
        <button className='botaoadicionar' onClick={ (e) => addTarefa( "click" ) }><i class="fa-solid fa-plus fa-beat"></i></button>
      </div>
        <div>
          <ul>
            {listatarefas.map( (item, index) => (
              <li className={item.status ? 'nãoconcluida' :'concluida' } key={index}>{item.texto} <button className={item.status ? 'botaonãoconcluida' : 'botaoconcluida'} onClick={() => statustarefa(item.id, item.status)}>{item.status ?<i class="fa-solid fa-x fa-fade"></i> :<i class="fa-solid fa-check fa-fade" ></i> }</button> <button className={item.status ? 'boataoexcluirtrue' : 'botaoexcluirfalse'} onClick={() => excluirtarefa(item.id)}><i class="fa-solid fa-trash fa-bounce"></i></button></li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
export default App;
