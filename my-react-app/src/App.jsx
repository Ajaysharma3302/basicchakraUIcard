import { Card } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex align="center" justify="center">
      <>
        <Card.Root width="320px">
          <Card.Body gap="2">
            <Card.Title mt="2">Good React App</Card.Title>
            <Avatar src="https://picsum.photos/200/300" size="l" />
            <Card.Description>
              This is the card body. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
              Curabitur nec odio vel dui euismod fermentum.
            </Card.Description>
          </Card.Body>
        </Card.Root>
      </>
    </Flex>
  );
}

export default App;
