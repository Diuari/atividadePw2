import "./style.css"
import iconTelefone from "../../assets/iconTelefone.svg"
import iconShield from "../../assets/iconShield.svg"

function Formulario(){

    return(

        <div className="formulario">

            <input type="text" placeholder="Enviar mensagem para Fábio..."/>
            <button>Publicar</button>
            <img src={iconTelefone} alt="icone telefone"/>
            <img src={iconShield} alt="icone escudo"/>

        </div>
    )


}

export default Formulario;