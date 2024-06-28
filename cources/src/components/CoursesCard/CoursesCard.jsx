import ButtonBig from "../Button/ButtonBig"
import "./CoursesCard.css"

export default function CoursesCard(){
    return(<div className="card">
            <div className="card_box">
                <div className="card_image">
                    <img className="image" src="http://placehold.it/300x200" alt=''></img>
                </div>
                <div className="card_name">
                    Django
                </div>
                <div className="card_prices">
                    <div className="price">
                        <b>10000 $</b><br/>
                        <i>Со скидкой</i>
                    </div>
                    <div className="price no-discount">
                        <b>12000 $</b><br/>
                        <i>Без скидки</i>
                        
                    </div>
                </div>
                <ButtonBig className={"button_card"}>Купить!</ButtonBig>
            </div>
        </div>
    )
}
