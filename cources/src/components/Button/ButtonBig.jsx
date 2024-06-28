import "./ButtonBig.css"
// import "../../styles/glob.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default function({children, onClick, className}){
    return(
        <button className={className ? `button-big ${className}` : `button-big`} onClick={onClick} >{children}</button>
    )
}