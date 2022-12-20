import React from 'react';
import style from './Header.module.scss';
import logo from '../../assets/logoGold.png';
import {Link, NavLink } from 'react-router-dom';

const Header = (props: any) => {
    return (


        <div className={style.header_container}>

            <div className={style.header_logo}>
                <img src={logo} alt=""/>
            </div>

            <ul className={style.header_menu}>

                <li> <NavLink to="#home">Home</NavLink></li>
                <li ><a href="#about">About me</a></li>
                    <li ><a href="">My skills</a></li>
                    <li ><a href="">Project</a></li>
                    <li ><a href="">Contacts</a></li>
                    <li ><a href="">Ru</a></li>

            </ul>

        </div>

    )

}

export default Header;