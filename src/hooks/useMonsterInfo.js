import { useState } from 'react';

const baseMonsterTemplate = {
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
};

export const useMonsterInfo = () => {
  const [monsterInfo, setMonsterInfo] = useState(baseMonsterTemplate);

  const setProperty = (propertyPath, value) => {
    setMonsterInfo((prevInfo) => {
      const keys = propertyPath.split('.');
      const lastKey = keys.pop();
      const nestedObject = keys.reduce((obj, key) => obj[key], prevInfo);

      nestedObject[lastKey] = value;

      return { ...prevInfo };
    });
  };

  const resetMonsterInfo = () => {
    setMonsterInfo(baseMonsterTemplate);
  };

  const setAllProperties = (newMonsterInfo) => {
    newMonsterInfo ? setMonsterInfo(newMonsterInfo) : resetMonsterInfo();
  };

  return [monsterInfo, setProperty, setAllProperties];
};
