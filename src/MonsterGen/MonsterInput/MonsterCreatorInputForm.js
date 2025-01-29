import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import NameInput from 'shared/NameInput/NameInput';
import MonsterAttributeSelect from './MonsterAttributeSelect/MonsterAttributeSelect';
import MonsterBaseStatsInput from './MonsterBaseStatsInput/MonsterBaseStatsInput';

const MonsterCreatorInputForm = ({ monsterInfo, setMonsterProperty }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
      <GridItem>
        <NameInput
          name={monsterInfo.name}
          setName={(newName) => setMonsterProperty('name', newName)}
          nameOf={'Monster'}
        />
      </GridItem>
      <GridItem>
        <MonsterAttributeSelect
          monsterAttribute={monsterInfo.attribute}
          setMonsterAttribute={(newAttribute) =>
            setMonsterProperty('attribute', newAttribute)
          }
        />
      </GridItem>
      <GridItem>
        <MonsterBaseStatsInput
          monsterBaseStats={monsterInfo.baseStats}
          setMonsterProperty={setMonsterProperty}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default MonsterCreatorInputForm;
