import React from 'react';
import CharacterGen from './CharacterGen/CharacterGen';
import { Provider } from 'shared/ChakraUI/provider';
import { Tabs, Container } from '@chakra-ui/react';
import MonsterGen from 'MonsterGen/MonsterGen';

const isLocal = process.env.NODE_ENV === 'development';

function App() {
  return (
    <Provider>
      <Container>
        <Tabs.Root lazyMount unmountOnExit defaultValue="tab-2">
          <Tabs.List>
            <Tabs.Trigger value="tab-1">Character Generator</Tabs.Trigger>
            <Tabs.Trigger value="tab-2">Monster Creation Tool</Tabs.Trigger>
            <Tabs.Trigger value="tab-3">Ability Creation Tool</Tabs.Trigger>
            {isLocal ? (
              <Tabs.Trigger>Running in Local Mode</Tabs.Trigger>
            ) : null}
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <CharacterGen />
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            <MonsterGen />
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </Provider>
  );
}

export default App;
