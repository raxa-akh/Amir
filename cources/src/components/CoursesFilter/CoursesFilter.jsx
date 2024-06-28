import { useState } from "react"
import Button from "../Button/Button"
import "./CoursesFilter.css"
import CoursesCard from "../CoursesCard/CoursesCard"

const filters = ["new", "hits", "django", "aiogram"]


export default function CourcesFilter(){
    const [filter, setfilt] = useState(null)
    function activate(filt){
        if (filt === filter){
            setfilt(null)
        }
        else{
            setfilt(filt)
        }
        
    }

    return(
        <div className="container">
            <div className="cources_filter">
                <Button isActive={filter === "new"} onClick={() => activate(filters[0])}>Новинки</Button>
                <Button isActive={filter === "hits"} onClick={() => activate(filters[1])}>Хиты</Button>
                <Button isActive={filter === "django"} onClick={() => activate(filters[2])}>Django</Button>
                <Button isActive={filter === "aiogram"} onClick={() => activate(filters[3])}>Aiogram</Button>
            </div>
            <div className="cources_container">
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
            </div>
        </div>
    )
}
