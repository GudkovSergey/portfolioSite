import React from "react";
import style from "./home.module.scss";
import myPhoto from "../../assets/MyPhoto2.png"
import cn from "classnames";
const Home = (props:any)=>{
    return(
<div className={style.home}>
        <div className={style.home_container__logotype}>
            {/*<img src={logo} alt=""/>*/}
                <div className={style.line}></div>
            <div className={style.home_name}>
                <h2 className={style.home_name__h2}>React developer</h2>
                <h1 className={style.home_lastName__h1}> Gudkov</h1>
                <h1 className={style.home_firstName__h1}>Sergey</h1>
           </div>
                <div className={style.line}></div>

        </div>
    <div className={cn(style.home_myPhoto, style.animation)}>
        <img src={myPhoto} alt=""/>
    </div>
    </div>
    )
}
export default Home;