import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import InfoWindow from "../components/InfoWindow/InfoWindow";

function Profile(){
    return(
        <>
            <Header/>
            <MainTitle>Ваш профиль</MainTitle>
            <InfoWindow/>
        </>
    )
}

export {Profile}