import './App.css';
import { Fragment } from 'react';
import { Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { FindCourses } from './pages/FindCoursesPage';
import { Profile } from './pages/ProfilePage';
import { Support } from './pages/SupportPage';
import { NotFound } from './pages/NotFoundPage';
import { Login } from './pages/LoginPage';
import { Register } from './pages/RegisterPage';


export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/findcourses' element={<FindCourses/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </Fragment>
  );
}


