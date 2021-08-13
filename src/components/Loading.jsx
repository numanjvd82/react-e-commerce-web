import { Center, Spinner } from '@chakra-ui/react';

const Loading = () => (
  <Center>
    <Spinner
      mt="5"
      thickness="100px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Center>
);

export default Loading;
