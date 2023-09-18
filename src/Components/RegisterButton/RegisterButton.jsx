import React from 'react';
import style from './RegisterButton.module.css';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import categoryMap from '../../data/categoryMap';
import { GlobalContext } from '../../Contexts/DataContext';

const RegisterButton = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const [error, setError] = React.useState('');
  const { addRegister } = React.useContext(GlobalContext);
  const [inputData, setInputData] = React.useState({
    shortDescription: '',
    category: 'Alimentos',
    value: '',
  });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setInputData({
      shortDescription: '',
      category: 'Alimentos',
      value: '',
    });
    setError('');

    setTimeout(() => {
      setActiveMenu(null);
    }, 400);
  };

  const handleAddRegister = () => {
    if (!(inputData.category && inputData.category && inputData.value)) {
      setError('Preencha todos os campos!');
      return;
    }

    if (activeMenu === 'outgoing') {
      addRegister(
        inputData.category,
        inputData.shortDescription,
        -inputData.value
      );
    }

    if (activeMenu === 'income') {
      addRegister('Rendimentos', inputData.shortDescription, +inputData.value);
    }

    toggleDrawer();
  };

  return (
    <>
      <button onClick={toggleDrawer} className={style.button}>
        <AddRegisterIcon />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className={style.drawer}
        direction='bottom'
      >
        <div className={style.drawerInside}>
          <div className={style.drawerContainer}>
            {activeMenu === null ? (
              <div className={style.topInitialButtons}>
                <>
                  <button
                    onClick={() => setActiveMenu('outgoing')}
                    className={style.redButton}
                  >
                    Adicionar despesa
                  </button>
                  <button
                    onClick={() => setActiveMenu('income')}
                    className={style.greenButton}
                  >
                    Adicionar receita
                  </button>
                </>
              </div>
            ) : null}

            {activeMenu === 'outgoing' ? (
              <div className={style.outgoingMenu}>
                <h3 className={style.menuTitle}>Registro de despesa</h3>
                <div className={style.inputs}>
                  <div className={style.inputContainer}>
                    <label
                      className={style.label}
                      htmlFor='outgoingDescription'
                    >
                      Breve descrição
                    </label>
                    <input
                      className={style.input}
                      type='text'
                      placeholder='Ex: iFood'
                      value={inputData.shortDescription}
                      onInput={({ target }) => {
                        setInputData((prevData) => ({
                          ...prevData,
                          shortDescription: target.value,
                        }));
                      }}
                      name='outgoingDescription'
                      id='outgoingDescription'
                    />
                  </div>
                  <div className={style.twoColumns}>
                    <div className={style.inputContainer}>
                      <label className={style.label} htmlFor='outgoingCategory'>
                        Categoria
                      </label>
                      <select
                        className={style.input}
                        name='outgoingCategory'
                        id='outgoingCategory'
                        onChange={({ target }) => {
                          setInputData((prevData) => ({
                            ...prevData,
                            category: target.value,
                          }));
                        }}
                        value={inputData.category}
                      >
                        {categoryMap.map(({ code }) => (
                          <option key={code} value={code}>
                            {code}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={style.inputContainer}>
                      <label className={style.label} htmlFor='outgoingValue'>
                        Valor
                      </label>
                      <div className={style.inputRelative}>
                        <input
                          className={`${style.input} ${style.valueInput}`}
                          type='number'
                          placeholder='44.25'
                          value={inputData.value}
                          onInput={({ target }) => {
                            setInputData((prevData) => ({
                              ...prevData,
                              value: target.value,
                            }));
                          }}
                          name='outgoingValue'
                          id='outgoingValue'
                        />
                        <span className={style.realDecorator}>R$</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {activeMenu === 'income' ? (
              <div>
                <h3 className={style.menuTitle}>Registro de receita</h3>
                <div className={style.inputs}>
                  <div className={style.inputContainer}>
                    <label className={style.label} htmlFor='incomeDescription'>
                      Breve descrição
                    </label>
                    <input
                      className={style.input}
                      type='text'
                      placeholder='Ex: Salário'
                      value={inputData.shortDescription}
                      onInput={({ target }) => {
                        setInputData((prevData) => ({
                          ...prevData,
                          shortDescription: target.value,
                        }));
                      }}
                      name='incomeDescription'
                      id='incomeDescription'
                    />
                  </div>
                  <div className={style.inputContainer}>
                    <label className={style.label} htmlFor='incomeValue'>
                      Valor
                    </label>
                    <div className={style.inputRelative}>
                      <input
                        className={`${style.input} ${style.valueInput}`}
                        type='number'
                        placeholder='44.25'
                        value={inputData.value}
                        onInput={({ target }) => {
                          setInputData((prevData) => ({
                            ...prevData,
                            value: target.value,
                          }));
                        }}
                        name='incomeValue'
                        id='incomeValue'
                      />
                      <span className={style.realDecorator}>R$</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {error ? <span className={style.error}>{error}</span> : null}
            <div className={style.bottomButtons}>
              <button
                onClick={toggleDrawer}
                className={
                  activeMenu === 'income' || activeMenu === 'outgoing'
                    ? `${style.purpleButton} ${style.purpleGhostButton}`
                    : style.purpleButton
                }
              >
                Fechar
              </button>
              {activeMenu === 'income' || activeMenu === 'outgoing' ? (
                <button
                  onClick={handleAddRegister}
                  className={style.purpleButton}
                >
                  Adicionar
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

const AddRegisterIcon = () => {
  return (
    <svg
      width='36'
      height='36'
      viewBox='0 0 36 36'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18 6.375C18.325 6.375 18.5938 6.26875 18.8063 6.05625C19.0188 5.84375 19.125 5.575 19.125 5.25C19.125 4.925 19.0188 4.65625 18.8063 4.44375C18.5938 4.23125 18.325 4.125 18 4.125C17.675 4.125 17.4063 4.23125 17.1938 4.44375C16.9813 4.65625 16.875 4.925 16.875 5.25C16.875 5.575 16.9813 5.84375 17.1938 6.05625C17.4063 6.26875 17.675 6.375 18 6.375ZM27 34.5C24.925 34.5 23.1562 33.7688 21.6938 32.3063C20.2313 30.8438 19.5 29.075 19.5 27C19.5 24.925 20.2313 23.1562 21.6938 21.6938C23.1562 20.2313 24.925 19.5 27 19.5C29.075 19.5 30.8438 20.2313 32.3063 21.6938C33.7688 23.1562 34.5 24.925 34.5 27C34.5 29.075 33.7688 30.8438 32.3063 32.3063C30.8438 33.7688 29.075 34.5 27 34.5ZM26.25 31.5H27.75V27.75H31.5V26.25H27.75V22.5H26.25V26.25H22.5V27.75H26.25V31.5ZM10.5 13.5H25.5V10.5H10.5V13.5ZM17.5125 31.5H7.5C6.675 31.5 5.96875 31.2063 5.38125 30.6188C4.79375 30.0313 4.5 29.325 4.5 28.5V7.5C4.5 6.675 4.79375 5.96875 5.38125 5.38125C5.96875 4.79375 6.675 4.5 7.5 4.5H13.8C14.125 3.6 14.6688 2.875 15.4313 2.325C16.1938 1.775 17.05 1.5 18 1.5C18.95 1.5 19.8063 1.775 20.5688 2.325C21.3313 2.875 21.875 3.6 22.2 4.5H28.5C29.325 4.5 30.0313 4.79375 30.6188 5.38125C31.2063 5.96875 31.5 6.675 31.5 7.5V17.55C30.775 17.2 30.0438 16.9375 29.3063 16.7625C28.5688 16.5875 27.8 16.5 27 16.5C26.725 16.5 26.4688 16.5063 26.2313 16.5188C25.9938 16.5313 25.75 16.5625 25.5 16.6125V16.5H10.5V19.5H19.6875C19.2375 19.925 18.8313 20.3875 18.4688 20.8875C18.1063 21.3875 17.7875 21.925 17.5125 22.5H10.5V25.5H16.6125C16.5625 25.75 16.5313 25.9938 16.5188 26.2313C16.5063 26.4688 16.5 26.725 16.5 27C16.5 27.825 16.575 28.5938 16.725 29.3063C16.875 30.0188 17.1375 30.75 17.5125 31.5Z'
        fill='#F8F4FF'
      />
    </svg>
  );
};

export default RegisterButton;
