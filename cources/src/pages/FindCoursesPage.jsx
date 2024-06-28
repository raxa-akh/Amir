import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import CoursesFilter from "../components/CoursesFilter/CoursesFilter";


function FindCourses(){
    return(
        <>
            <Header/>
            <MainTitle>Доступные курсы</MainTitle>
            <CoursesFilter/>
        </>
    )
}

export {FindCourses}