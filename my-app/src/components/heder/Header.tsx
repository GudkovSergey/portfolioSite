import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/logoGold.png';
import { NavLink } from 'react-router-dom';

const Header = (props: any) => {
    return (


        <div className={style.header_container}>

            <div className={style.header_logo}>
                <img src={logo} alt=""/>
            </div>

            <ul className={style.header_menu}>

                    <li ><a href="">Home</a></li>
                    <li ><NavLink to='/myInfo' >About me</NavLink></li>
                    <li ><a href="">My skills</a></li>
                    <li ><a href="">Project</a></li>
                    <li ><a href="">Contacts</a></li>
                    <li ><a href="">Ru</a></li>

            </ul>

        </div>

    )

}

export default Header;