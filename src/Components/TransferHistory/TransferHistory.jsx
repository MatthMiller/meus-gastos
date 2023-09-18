import React from 'react';
import style from './TransferHistory.module.css';
import categoryMap from '../../data/categoryMap';
import { GlobalContext } from '../../Contexts/DataContext';
import moment from 'moment';

const FilterIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='current'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z'
        fill='#B1B1B1'
      />
    </svg>
  );
};

const TransferHistory = () => {
  const { userData } = React.useContext(GlobalContext);
  const [filteredItems, setFilteredItems] = React.useState(null);

  // Organiza pelo mais recente
  React.useEffect(() => {
    if (userData && userData?.actualMonthRegisters.length) {
      const tempData = [...userData.actualMonthRegisters];

      tempData.sort((a, b) => {
        if (moment(a.createdAt).isBefore(b.createdAt)) {
          return 1;
        }
        if (moment(a.createdAt).isAfter(b.createdAt)) {
          return -1;
        }
        return 0;
      });

      setFilteredItems(tempData);
    }
  }, [userData]);

  React.useEffect(() => {}, [filteredItems]);

  return (
    <section className={'g-wrapper'}>
      <div className='g-container'>
        <div className={style.header}>
          <h2 className={style.sectionTitle}>Histórico de transferências</h2>
          <div className={style.iconPadding}>
            <FilterIcon />
          </div>
        </div>

        <ol className={style.history}>
          {userData &&
          userData?.actualMonthRegisters.length &&
          filteredItems ? (
            filteredItems.map((actualRegister) => {
              const categoryData = categoryMap.filter(
                ({ code }) => code === actualRegister.category
              )[0];

              return (
                <li
                  className={style.register}
                  key={actualRegister.createdAt.format()}
                >
                  <div className={style.left}>
                    <div
                      className={style.iconBackground}
                      style={{ backgroundColor: categoryData.bgColor }}
                    >
                      <img
                        src={categoryData.icon}
                        alt={`Ícone da categoria ${actualRegister.category}`}
                      />
                    </div>
                    <div className={style.leftInfo}>
                      <p className={style.shortDescription}>
                        {actualRegister.shortDescription}
                      </p>
                      <p className={style.category}>
                        {actualRegister.category}
                      </p>
                    </div>
                  </div>

                  <div className={style.right}>
                    {actualRegister.value >= 0 ? (
                      <p className={style.positive}>
                        R$ {actualRegister.value.toFixed(2).replace('.', ',')}
                      </p>
                    ) : (
                      <p className={style.negative}>
                        - R${' '}
                        {Math.abs(actualRegister.value)
                          .toFixed(2)
                          .replace('.', ',')}
                      </p>
                    )}
                    <p className={style.date}>
                      {actualRegister.createdAt.format('DD/MM/YYYY')}
                    </p>
                  </div>
                </li>
              );
            })
          ) : (
            <li className={style.noHistory}>
              <p>Nenhuma transferência registrada!</p>
            </li>
          )}
        </ol>
      </div>
    </section>
  );
};

export default TransferHistory;
