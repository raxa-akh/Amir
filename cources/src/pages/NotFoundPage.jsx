import { Link } from 'react-router-dom';



function NotFound(){
    return(
        <div style={{marginTop: "2rem"}} className="container">
            <h1>Sorry, page not found. <Link to="/">Return to "Home page"</Link></h1>
        </div>
    )
}

export {NotFound}