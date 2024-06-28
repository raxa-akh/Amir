import ButtonBig from "../Button/ButtonBig";
import { Link } from 'react-router-dom';
import "./both.css"

export default function LoginForm(){
    return(
        <div className="container container_login">
            <div className="login_inner">
                <form name="name" className="login_form">
                    <h2 className="login_title">Вход</h2>
                    
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
                        <label className="input_label">Pasword</label>
                    </div>

                    <div className="forgot_and_save">
                        <label>
                            <input type="checkbox"></input>
                            Запомнить меня
                        </label>
                        <a className="ref" href="#">Забыли пароль</a>


                    </div>

                    <div><ButtonBig>Войти</ButtonBig></div>

                    <div className="create">
                        Нет аккаунта?  <Link className="ref" to="/register">Создайте</Link>
                    </div>

                    <div className="social_reg">
                        <a className="social_reg_item">
                            <i className="fa-brands fa-google"></i>
                        </a>
                        <a className="social_reg_item">
                            <i className="fa-brands fa-telegram"></i>
                        </a>
                        <a className="social_reg_item">
                            <i className="fa-brands fa-vk"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}