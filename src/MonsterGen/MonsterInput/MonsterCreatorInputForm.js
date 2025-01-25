import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import NameInput from 'shared/NameInput/NameInput';

const MonsterCreatorInputForm = ({ monsterInfo, setMonsterProperty }) => {
  return (
    <SimpleGrid>
      <GridItem>
        <NameInput
          name={monsterInfo.name}
          setName={(newName) => setMonsterProperty(newName, 'name')}
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default MonsterCreatorInputForm;
