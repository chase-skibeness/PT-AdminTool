import React, { useState } from 'react';
import CharacterCreatorInputForm from './CharacterInput/CharacterCreatorInputForm';
import CharacterLevelView from './CharacterView/CharacterLevelView';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { useCharacterInfo } from 'hooks/useCharacterInfo';

function CharacterGen() {
  const [characterInfo, setCharacterProperty] = useCharacterInfo();

  return (
    <Stack gap="8">
      <Box mt="4">
        <Heading size="3xl">Project Township Character Generator</Heading>
      </Box>
      <CharacterCreatorInputForm characterInfo={characterInfo} setCharacterProperty={setCharacterProperty} />
      <CharacterLevelView
        name={characterInfo.name}
        baseStats={characterInfo.baseStats}
        growthRates={characterInfo.growthRates}
      />
    </Stack>
  );
}

export default CharacterGen;
