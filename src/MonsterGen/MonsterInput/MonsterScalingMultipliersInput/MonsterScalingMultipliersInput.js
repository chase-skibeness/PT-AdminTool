import { Badge, Card, GridItem, Group, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { NumberInputRoot, NumberInputField } from 'shared/ChakraUI/number-input';
import { Field } from 'shared/ChakraUI/field';

const MonsterScalingMultipliersInput = ({ scalingMultipliers, setMonsterProperty }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading>Scaling Multipliers</Heading>
      </Card.Header>
      <Card.Body>
        <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3}>
          {Object.keys(scalingMultipliers).map((stat) => (
            <GridItem key={`Monster${stat}ScalingMultiplierInputGridItemKey`}>
              <Field
                key={`Monster${stat}ScalingMultiplierFieldKey`}
                label={
                  <Badge
                    key={`${stat}ScalingMultiplierLabelKey`}
                    htmlFor={`Monster${stat}ScalingMultiplierInput`}
                    variant="surface"
                  >
                    {stat}
                  </Badge>
                }
              >
                <Group attached>
                  <NumberInputRoot
                    min={0.5}
                    max={1.5}
                    step={0.05}
                    value={scalingMultipliers[stat] ?? 0.5}
                    onValueChange={(e) => {
                      setMonsterProperty(`scalingMultipliers.${stat}`, e.value);
                    }}
                    id={`Monster${stat}ScalingMultiplierInput`}
                    key={`Monster${stat}ScalingMultiplierInputRootKey`}
                  >
                    <NumberInputField key={`Monster${stat}ScalingMultiplierInputFieldKey`} />
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

export default MonsterScalingMultipliersInput;
