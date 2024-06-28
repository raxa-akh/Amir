import "./InfoWindow.css"

export default function InfoWindow(){
    return(
        <div className="container container_info">
            <div className="info_inner">
                <div className="about_user">
                    <div className="user_photo">
                        <img className="user_img" src="http://placehold.it/100x100" alt=''/>
                    </div>
                    <div className="user_info">
                        <div className="user_name">Ахмедов Рашид</div>
                        <div className="courses_count">Имеется курсов: <b>12</b></div>
                        <div className="courses_sertificat">
                            <a className="sertificat_ref" href="#">Сертификаты</a>
                            </div>
                    </div>
                </div>
                
                <div className="about_courses">
                    <h2 className="about_courses_title">Купленные курсы</h2>
                    <div className="bought_courses">
                        <div className="bought_courses_item">
                            <div className="courses_title">
                                <a className="courses_ref" href="#">Django-разработчик</a>
                            </div>
                            <div className="courses_status courses_status-noend">Не пройден</div>
                        </div>
                        <div className="bought_courses_item">
                            <div className="courses_title">
                                <a className="courses_ref" href="#">Django-разработчик</a>
                            </div>
                            <div className="courses_status courses_status-noend">Не пройден</div>
                        </div>
                        <div className="bought_courses_item">
                            <div className="courses_title">
                                <a className="courses_ref" href="#">Django-разработчик</a>
                            </div>
                            <div className="courses_status courses_status-end">Пройден</div>
                        </div>
                    </div>
                </div>{/*about_courses*/}
            </div>{/*info_inner*/}
      </div>
    )
}