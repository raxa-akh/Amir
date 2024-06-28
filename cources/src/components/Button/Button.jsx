import classes from "./Button.module.css"
// import "../../styles/glob.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function({children, isActive, onClick}){
    return(
        <button className={isActive ? `${classes.button} ${classes.active}`:  classes.button} onClick={onClick} >{children}</button>
    )
}