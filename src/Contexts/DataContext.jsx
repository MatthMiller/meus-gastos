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

  return (
    <GlobalContext.Provider value={{ userData, setUserData, addRegister }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default DataContext;
