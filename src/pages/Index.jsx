import { Container, Text, VStack, Heading, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Flex direction={{ base: "column", md: "row" }} spacing={4}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h1" mb={4}>Top Stories</Heading>
          <VStack spacing={4} align="start">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 1</Heading>
              <Text mt={4}>This is a summary of the first article.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Article 2</Heading>
              <Text mt={4}>This is a summary of the second article.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h2" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="start">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Advertisement</Heading>
              <Text mt={4}>This is an ad.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Additional Content</Heading>
              <Text mt={4}>This is some additional content.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;