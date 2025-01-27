import { Card, Heading } from '@chakra-ui/react';
import React from 'react';
import AttributeSelect from 'shared/AttributeSelect/AttributeSelect';

const MonsterAttributeSelect = ({ monsterInfo, setMonsterProperty }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Heading>Monster Attribute</Heading>
      </Card.Header>
      <Card.Body>
        <AttributeSelect
          attribute={monsterInfo.attribute}
          setAttribute={(newAttribute) =>
            setMonsterProperty(newAttribute, 'attribute')
          }
        />
      </Card.Body>
    </Card.Root>
  );
};

export default MonsterAttributeSelect;
