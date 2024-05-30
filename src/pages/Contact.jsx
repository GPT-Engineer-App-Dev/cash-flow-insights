import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="start">
        <Heading as="h1">Contact Us</Heading>
        <Text>
          For inquiries, please email us at contact@financialtimes.com.
        </Text>
      </VStack>
    </Container>
  );
};

export default Contact;