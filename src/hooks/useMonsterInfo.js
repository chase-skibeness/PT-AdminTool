import { useState } from 'react';

export const useMonsterInfo = () => {
  const [monsterInfo, setMonsterInfo] = useState({
    name: null,
    behavior: null,
    attribute: null,
    naturalWeaponPower: null,
    baseStats: {
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
    scalingMultipliers: {
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
    abilities: [
      {
        name: null,
        cost: null,
        abilityPower: null,
        attribute: null,
        accuracy: null,
        formula: null,
      },
    ],
  });

  const setProperty = (value, propertyPath) => {
    setMonsterInfo((prevInfo) => {
      const keys = propertyPath.split('.');
      const lastKey = keys.pop();
      const nestedObject = keys.reduce((obj, key) => obj[key], prevInfo);

      nestedObject[lastKey] = value;

      return { ...prevInfo };
    });
  };

  const setAllProperties = (newMonsterInfo) => {
    setMonsterInfo(newMonsterInfo);
  };

  return [monsterInfo, setProperty, setAllProperties];
};
