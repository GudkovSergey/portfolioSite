import React from 'react';
import style from './App.module.scss';
import HeaderContainer from './components/heder/HeaderContainer';
import HomeContainer from './components/home/home-container';

const App=()=> {
  return (
    <div className={style.app_wrapper}>
        <div className={style.header_container}>
        <HeaderContainer/>
        <HomeContainer/>
        </div>

    </div>
  );
}

export default App;
