import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import NameInput from 'shared/NameInput/NameInput';
import MonsterAttributeSelect from './MonsterAttributeSelect/MonsterAttributeSelect';

const MonsterCreatorInputForm = ({ monsterInfo, setMonsterProperty }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
      <GridItem>
        <NameInput
          name={monsterInfo.name}
          setName={(newName) => setMonsterProperty(newName, 'name')}
          nameOf={'Monster'}
        />
      </GridItem>
      <GridItem>
        <MonsterAttributeSelect
          monsterInfo={monsterInfo}
          setMonsterProperty={setMonsterProperty}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default MonsterCreatorInputForm;
