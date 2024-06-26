import { Container, Text, VStack, Box, Heading, Button, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>Welcome to Our Product</Heading>
          <Text fontSize="lg">Discover the amazing features and benefits of our product.</Text>
        </Box>
        <Image src="/images/product-image.jpg" alt="Product Image" boxSize="300px" objectFit="cover" borderRadius="md" />
        <Flex justifyContent="center" width="100%">
          <Button colorScheme="teal" size="lg" leftIcon={<FaRocket />}>Get Started</Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;