import React from 'react';
import { createListCollection, Group, HStack, Icon } from '@chakra-ui/react';
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectValueText,
  SelectItem,
} from 'shared/ChakraUI/select';
import {
  GiFire,
  GiGroundSprout,
  GiSun,
  GiMoon,
  GiWaterDrop,
  GiWindyStripes,
} from 'react-icons/gi';

const attributes = [
  {
    name: 'Fire',
    symbol: (
      <Icon fontSize="16px" color="red.fg">
        <GiFire />
      </Icon>
    ),
  },
  {
    name: 'Water',
    symbol: (
      <Icon fontSize="16px" color="blue.fg">
        <GiWaterDrop />
      </Icon>
    ),
  },
  {
    name: 'Earth',
    symbol: (
      <Icon fontSize="16px" color="orange.500">
        <GiGroundSprout />
      </Icon>
    ),
  },
  {
    name: 'Wind',
    symbol: (
      <Icon fontSize="16px" color="green.fg">
        <GiWindyStripes />
      </Icon>
    ),
  },
  {
    name: 'Light',
    symbol: (
      <Icon fontSize="16px" color="yellow.fg">
        <GiSun />
      </Icon>
    ),
  },
  {
    name: 'Dark',
    symbol: (
      <Icon fontSize="16px">
        <GiMoon />
      </Icon>
    ),
  },
];
const attributesCollection = createListCollection({
  items: attributes.map((attribute) => {
    return {
      label: attribute.name,
      value: attribute.name,
      symbol: attribute.symbol,
    };
  }),
});

const AttributeSelect = ({ attribute, setAttribute }) => {
  return (
    <Group attached>
      <SelectRoot
        collection={attributesCollection}
        value={attribute || []}
        onValueChange={(e) => setAttribute(e.value)}
        multiple
      >
        <SelectTrigger>
          <SelectValueText placeholder="--Choose Attribute--">
            {(items) => {
              return (
                <HStack>
                  {items.map((item) => {
                    const { symbol } = item;
                    return symbol;
                  })}
                </HStack>
              );
            }}
          </SelectValueText>
        </SelectTrigger>
        <SelectContent>
          {attributesCollection.items.map((attributeOption) => (
            <SelectItem item={attributeOption} key={attributeOption.value}>
              <HStack>
                {attributeOption.symbol}
                {attributeOption.label}
              </HStack>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Group>
  );
};

export default AttributeSelect;
