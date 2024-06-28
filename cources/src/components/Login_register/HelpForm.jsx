import ButtonBig from "../Button/ButtonBig";
import "./both.css"

export default function HelpForm(){
    return(
        <div className="container container_form">
            <div className="login_inner">
                <form name="name" className="login_form">
                    <h2 className="login_title">Заявка</h2>
                    
                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input className="input" type="text" required></input>
                        <label className="input_label">Имя пользователя</label>
                    </div>

                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input className="input" type="number" required></input>
                        <label className="input_label">Телефон</label>
                    </div>

                    <div><ButtonBig>Отправить</ButtonBig></div>

                </form>
            </div>
        </div>
    )
}