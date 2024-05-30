import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">About Us</Heading>
        <Text>
          Welcome to the Financial Times. We are committed to providing the latest news and analysis on global financial markets.
        </Text>
      </VStack>
    </Container>
  );
};

export default About;