import moment from 'moment/moment';
import React from 'react';

export const GlobalContext = React.createContext();

const DataContext = ({ children }) => {
  const [userData, setUserData] = React.useState({
    actualMonthRegisters: [],
  });

  const addRegister = (category, shortDescription, value) => {
    const tempOldData = userData;

    if (Array.isArray(tempOldData?.actualMonthRegisters)) {
      tempOldData.actualMonthRegisters.push({
        shortDescription,
        category,
        value,
        createdAt: moment(),
        // moment().isBefore, isAfter
      });

      setUserData(tempOldData);
    }
  };

  React.useEffect(() => {
    const hasLocalStorageData = localStorage.setItem(
      'userData',
      JSON.stringify({
        isLogged: true,
      })
    );

    addRegister('Alimentos', 'iFood', -5000.0);
    addRegister('Casa', 'Esposa Tainá', -400.0);

    console.log('data:', hasLocalStorageData);
  }, []);

  // React.useEffect(() => {}, []);

  return (
    <GlobalContext.Provider value={{ userData, setUserData, addRegister }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default DataContext;
