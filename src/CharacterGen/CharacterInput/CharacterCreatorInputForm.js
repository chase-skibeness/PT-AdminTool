import React from 'react';
import NameInput from 'shared/NameInput/NameInput';
import RaceInput from './RaceInput/RaceInput';
import BaseStatsInput from './BaseStatsInput/BaseStatsInput';
import GrowthRatesInput from './GrowthRatesInput/GrowthRatesInput';
import { GridItem, SimpleGrid } from '@chakra-ui/react';

const CharacterCreatorInputForm = ({ characterInfo, setCharacterProperty }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap="4">
      <GridItem>
        <NameInput
          name={characterInfo.name}
          setName={(newName) => setCharacterProperty('name', newName)}
          minH="188px"
          nameOf={'Character'}
        />
      </GridItem>
      <GridItem>
        <RaceInput
          race={characterInfo.race}
          setRace={(newRace) => setCharacterProperty('race', newRace)}
        />
      </GridItem>
      <GridItem>
        <BaseStatsInput
          baseStats={characterInfo.baseStats}
          setBaseStats={(newBaseStats) =>
            setCharacterProperty('baseStats', newBaseStats)
          }
          race={characterInfo.race}
        />
      </GridItem>
      <GridItem>
        <GrowthRatesInput
          growthRates={characterInfo.growthRates}
          setGrowthRates={(newGrowthRates) =>
            setCharacterProperty('growthRates', newGrowthRates)
          }
        />
      </GridItem>
    </SimpleGrid>
  );
};

export default CharacterCreatorInputForm;
