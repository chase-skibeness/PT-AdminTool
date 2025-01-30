import { Card, Heading } from '@chakra-ui/react';
import React from 'react';
import AttributeSelect from 'shared/AttributeSelect/AttributeSelect';

const MonsterAttributeSelect = ({ monsterAttribute, setMonsterAttribute }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading>Monster Attribute</Heading>
      </Card.Header>
      <Card.Body>
        <AttributeSelect attribute={monsterAttribute} setAttribute={setMonsterAttribute} />
      </Card.Body>
    </Card.Root>
  );
};

export default MonsterAttributeSelect;
