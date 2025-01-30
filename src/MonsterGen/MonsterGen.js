import React from 'react';
import { Box, Heading, HStack, Stack } from '@chakra-ui/react';
import MonsterControls from './MonsterInput/MonsterControls/MonsterControls';
import MonsterCreatorInputForm from './MonsterInput/MonsterCreatorInputForm';
import { useMonsterInfo } from 'hooks/useMonsterInfo';

function MonsterGen() {
  const [monsterInfo, setMonsterProperty, setAllMonsterProperties] = useMonsterInfo();

  return (
    <Stack gap="8">
      <Box mt="4">
        <HStack justifyContent={'space-between'}>
          <Heading size="3xl">Project Township Monster Creation Tool</Heading>
          <MonsterControls setAllMonsterProperties={setAllMonsterProperties} />
        </HStack>
      </Box>
      <MonsterCreatorInputForm monsterInfo={monsterInfo} setMonsterProperty={setMonsterProperty} />
    </Stack>
  );
}

export default MonsterGen;
