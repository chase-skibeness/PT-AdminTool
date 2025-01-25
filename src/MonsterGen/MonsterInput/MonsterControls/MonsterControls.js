import React, { useState } from 'react';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectValueText,
  SelectItem,
} from 'shared/ChakraUI/select';
import { createListCollection } from '@chakra-ui/react';
import monsterCompData from 'data/monster-compendium.json';

const monsterCollection = createListCollection({
  items: monsterCompData.map((monsterRef, i) => ({
    label: monsterRef.name,
    value: i,
  })),
});

function MonsterControls({ setAllMonsterProperties }) {
  const [selectedMonsterIndex, setSelectedMonsterIndex] = useState(null);

  function fetchMonsterData(file) {
    import(`data/monsters/${file}`)
      .then((data) => {
        setAllMonsterProperties(data.default);
      })
      .catch((error) => {
        console.error('Error loading monster data:', error);
      });
  }

  function handleMonsterChange(monsterIndex) {
    setSelectedMonsterIndex(monsterIndex);
    monsterIndex >= 0
      ? fetchMonsterData(monsterCompData[monsterIndex].file)
      : setAllMonsterProperties({});
  }

  return (
    <SelectRoot
      collection={monsterCollection}
      maxW="xs"
      value={[selectedMonsterIndex]}
      onValueChange={(e) => handleMonsterChange(e.value[0])}
    >
      <SelectTrigger clearable={true}>
        <SelectValueText placeholder="--Choose Monster--"></SelectValueText>
      </SelectTrigger>
      <SelectContent>
        {monsterCollection.items.map((item) => (
          <SelectItem key={item.value} item={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}

export default MonsterControls;
