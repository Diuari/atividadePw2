import fotoTotal from "../../assets/fotoTotal.svg"
import "./style.css"

function CardImagem(){

    return(

        <div className="cardImagem">
                <img src={fotoTotal}  alt="foto total"/>
            <div className="cardInfo">
                <p>BCD0D19</p>
                <p>Honda Civic Roxo</p>
            </div>
        </div>


    )

}

export default CardImagem;