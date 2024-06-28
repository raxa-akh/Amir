import "./MainTitle.css"

export default  function MainTitle({children}){
    let [first, second] = children.split(' ')
    return(
        
        <div className="container">
            <div className="cources_title">
                {first} <span>{second}</span>
                </div>
         </div>
    )
}