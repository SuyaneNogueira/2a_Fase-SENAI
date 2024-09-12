import './App.css'
import {useState} from 'react'
import Home from './Pages/Home'
import PagUm from './Pages/PagUm'
import PagDois from './Pages/PagDois'
import PagTers from './Pages/PagTers'
import Render from './Pages/Render'
import Corpo from './Pages/Corpo'


function App() {

  function MostarHome(){

setPagina(<Home/>)

  }

  const [pagina, setPagina] = useState()

  return (
    <>
    <nav className='PainelAdm'>
      <button onClick={MostarHome}>home</button>
      <button onClick={() => {setPagina(<PagUm/>)}}>PagUm</button>
      <button onClick={() => {setPagina(<PagDois/>)}}>PagDois</button>
      <button onClick={() => {setPagina(<PagTers/>)}}>PagTres</button>
      <button onClick={() => {setPagina(<Render/>)}}>Renderizações</button>
    </nav>
  <Corpo/>
  {pagina}
    </>
  )
}

export default App
