import { Badge, Card, GridItem, Group, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Field } from 'shared/ChakraUI/field';
import { NumberInputField, NumberInputRoot } from 'shared/ChakraUI/number-input';

const MonsterBaseStatsInput = ({ monsterBaseStats, setMonsterProperty }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading>Monster Base Stats</Heading>
      </Card.Header>
      <Card.Body>
        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
          {Object.keys(monsterBaseStats).map((stat) => (
            <GridItem key={`Monster${stat}InputGridItemKey`}>
              <Field
                key={`Monster${stat}InputFieldKey`}
                label={
                  <Badge key={`${stat}LabelKey`} htmlFor={`Monster${stat}Input`} variant="surface">
                    {stat}
                  </Badge>
                }
              >
                <Group attached>
                  <NumberInputRoot
                    min={0}
                    value={monsterBaseStats[stat] ?? 0}
                    onValueChange={(e) => {
                      setMonsterProperty(`baseStats.${stat}`, e.value);
                    }}
                    id={`Monster${stat}Input`}
                    key={`Monster${stat}InputRootKey`}
                  >
                    <NumberInputField key={`Monster${stat}InputFieldKey`} />
                  </NumberInputRoot>
                </Group>
              </Field>
            </GridItem>
          ))}
        </SimpleGrid>
      </Card.Body>
    </Card.Root>
  );
};

export default MonsterBaseStatsInput;
