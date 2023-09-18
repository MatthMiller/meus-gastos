import moment from 'moment/moment';
import React from 'react';

export const GlobalContext = React.createContext();

const DataContext = ({ children }) => {
  const [userData, setUserData] = React.useState({
    actualMonthRegisters: [],
  });

  const addRegister = (category, shortDescription, value) => {
    setUserData((prevData) => {
      return {
        ...prevData,
        actualMonthRegisters: [
          ...prevData.actualMonthRegisters,
          {
            shortDescription,
            category,
            value,
            createdAt: moment(),
          },
        ],
      };
    });
  };

  React.useEffect(() => {
    localStorage.setItem(
      'userData',
      JSON.stringify({
        isLogged: true,
      })
    );

    addRegister('Alimentos', 'iFood', -500.0);

    // console.log('data:', hasLocalStorageData);
  }, []);

  return (
    <GlobalContext.Provider value={{ userData, setUserData, addRegister }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default DataContext;
