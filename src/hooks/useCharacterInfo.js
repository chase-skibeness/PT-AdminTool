import { useState } from 'react';

export const useCharacterInfo = () => {
  const [characterInfo, setCharacterInfo] = useState({
    name: null,
    race: null,
    baseStats: {
      STR: { value: null, overflow: 0 },
      END: { value: null, overflow: 0 },
      DEF: { value: null, overflow: 0 },
      INT: { value: null, overflow: 0 },
      SPI: { value: null, overflow: 0 },
      MDF: { value: null, overflow: 0 },
      SPD: { value: null, overflow: 0 },
      LCK: { value: null, overflow: 0 },
      ACC: { value: null, overflow: 0 },
    },
    growthRates: {
      STR: null,
      END: null,
      DEF: null,
      INT: null,
      SPI: null,
      MDF: null,
      SPD: null,
      LCK: null,
      ACC: null,
    },
  });

  const setProperty = (value, propertyPath) => {
    setCharacterInfo((prevInfo) => {
      const keys = propertyPath.split('.');
      const lastKey = keys.pop();
      const nestedObject = keys.reduce((obj, key) => obj[key], prevInfo);

      nestedObject[lastKey] = value;

      return { ...prevInfo };
    });
  };

  const setAllProperties = (newCharacterInfo) => {
    setCharacterInfo(newCharacterInfo);
  };

  return [characterInfo, setProperty, setAllProperties];
};
