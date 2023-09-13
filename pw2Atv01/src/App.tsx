import './App.css'

import fotoPessoa1 from "./assets/pessoa1.svg"
import fotoPessoa2 from "./assets/pessoa2.svg"

import ButtonTop from './components/ButtonTop'
import CardText from './components/CardTextoPrincipal'
import CardImagem from './components/CardImage'
import Formulario from './components/Formulario'
import Message from './components/Message'

function App() {

  return (
    <main>
     
      <ButtonTop/>
      <CardText/>
      <CardImagem/>
      <Formulario/>
      <div className='caixaMensagens'>
        <Message foto={fotoPessoa1} text="Boris estou no local já lhe esperando. estou com camisa azul e calça jeans" />
        <Message foto={fotoPessoa2} text="Acabei de lhe ver. Vou estacionar o carro próximo." />
      </div>


    </main>
  )
}

export default App
