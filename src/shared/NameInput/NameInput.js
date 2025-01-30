import { Card, Heading, Input } from '@chakra-ui/react';
import React from 'react';

const NameInput = ({ name, setName, ...props }) => {
  const { minH, nameOf } = props;
  return (
    <Card.Root minH={minH}>
      <Card.Header>
        <Heading>{nameOf} Name</Heading>
      </Card.Header>
      <Card.Body>
        <Input id="nameInput" type="text" value={name || ''} onChange={(e) => setName(e.target.value)} />
      </Card.Body>
    </Card.Root>
  );
};

export default NameInput;
