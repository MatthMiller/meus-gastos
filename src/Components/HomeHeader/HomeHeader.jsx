import React from 'react';
import style from './HomeHeader.module.css';
import logo from '../../assets/logo-meus-gastos.svg';
import matheusPicture from '../../assets/profiles/user-matheus.png';
import senseDataPicture from '../../assets/profiles/user-sensedata.png';

const HomeHeader = () => {
  return (
    <header className={'g-wrapper ' + style.header}>
      <div className={'g-container ' + style.container}>
        <div className={style.logo}>
          <img src={logo} alt='Logo Meus Gastos' />
        </div>

        <div className={style.dateLabel}>
          <span className={style.month}>
            {new Intl.DateTimeFormat('pt', { month: 'long' }).format(
              Date.now()
            )}
          </span>
          <span className={style.year}>{new Date().getFullYear()}</span>
        </div>

        <img
          className={style.profilePicture}
          src={senseDataPicture}
          alt='Foto de perfil'
        />
      </div>
    </header>
  );
};

export default HomeHeader;
