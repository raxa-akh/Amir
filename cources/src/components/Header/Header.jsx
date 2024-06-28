import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
      <header className='header'>
        <div className='container'>
          <div className='header_inner'>
            <div className='header_logo'>Egg Cources</div>
            <nav className='header_refs'>
              <Link to="/" className="header_ref" >Главная</Link>
              <Link to="/findcourses" className="header_ref" >Курсы</Link>
              <Link to="/profile" className="header_ref" >Профиль</Link>
              <Link to="/support" className="header_ref" >Тех. поддержка</Link>
              <Link to="/login" className="header_ref" >Вход</Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }