import ButtonBig from "../Button/ButtonBig";
import { Link } from 'react-router-dom';
import "./both.css"

export default function RegisterForm(){
    return(
        <div className="container container_login">
            <div className="login_inner">
                <form name="name" className="login_form">
                    <h2 className="login_title">Регистрация</h2>
                    
                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input className="input" type="text" required></input>
                        <label className="input_label">Имя пользователя</label>
                    </div>

                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input className="input" type="email" required></input>
                        <label className="input_label">Email</label>
                    </div>

                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input className="input" type="password" required></input>
                        <label className="input_label">Пароль</label>
                    </div>

                    <div className="input_box">
                        <span className="icon_span">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input className="input" type="password" required></input>
                        <label className="input_label">Повтоите пароль</label>
                    </div>

                    <div><ButtonBig>Создать</ButtonBig></div>

                    <Link to="/login" className="ref">Уже есть аккаунт?</Link>

                </form>
            </div>
        </div>
    )
}