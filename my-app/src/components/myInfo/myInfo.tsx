import React from "react";
import style from "./myInfo.module.scss";
import avatar from "../../assets/avatar.png";
import cn from 'classnames';


const MyInfo =()=>{
    return(
        <div className={cn(style.myInfo_container, style.animation)}>

            <div className={style.myInfo_avatar}>
                <img src={avatar} alt=""/>
            </div>
            <div className={style.myInfo_title}>
                <h1>Gudkov Sergey</h1>
                <div className={style.myInfo__line}></div>
                <h2>React developer</h2>
            </div>
            <div className={style.myInfo_aboutMe_container}>

                <div className={style.myInfo_aboutMe}>

                    <div className={style.myInfo_aboutMe_title}>About Me</div>

                    <div className={style.myInfo_line}></div>

                    <div className={style.myInfo_aboutMe_content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi cum ea ex explicabo facere harum, impedit incidunt ipsa laboriosam magnam magni, minima, numquam possimus sunt voluptates voluptatibus. Nulla, rerum  </div>

                </div>
                <div className={style.myInfo_personal}>

                    <div className={style.myInfo_personal_title}>Personal Info</div>

                    <div className={style.myInfo_personal_line}></div>

                    <div className={style.myInfo_personal_content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aliquid asperiores consequatur, dolorem doloremque ea eius enim ex facilis fuga laboriosam magnam minima nemo odit optio, porro praesentium suscipit?</div>
                </div>
            </div>

        </div>
    )
}
export default MyInfo;