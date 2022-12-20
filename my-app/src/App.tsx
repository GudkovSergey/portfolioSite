import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
import HeaderContainer from './components/heder/HeaderContainer';
import HomeContainer from './components/home/home-container';
import MyInfoContainer from './components/myInfo/myInfo-container';


const App=()=> {
  return (
    <div className={style.app_wrapper}>
        <div id="home" className={style.app_header_container}>

        <HeaderContainer/>
        <HomeContainer/>
        </div>
        <div id="about" className={style.app_myInfo_container}>
            <MyInfoContainer/>
        </div>

    </div>
  );
}

export default App;
