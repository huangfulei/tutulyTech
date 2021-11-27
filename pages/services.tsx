import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Divider,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { AppLayout } from "../modules/AppLayout";
import { SEO } from "../common/components/SEO";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <AppLayout>
      <SEO />
      <Box py={16}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Services that fit your need
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            All services are provided with top standard and quality.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Static Website
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  Start from
                </Text>
                <Text fontSize="4xl" fontWeight="900">
                  €459
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
              alignItems="flex-start"
            >
              <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                Suitable for
              </Text>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Information display
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Simple features like booking and email
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  No frequent update required
                </ListItem>
              </List>
              <Divider />

              <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                What you will get
              </Text>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free ssl(for website security)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Fast host server
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Optimized SEO(Search Engine Optimization)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free domain for 1 years
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Client portal
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              {/* <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("red.300", "red.700")}
                  px={3}
                  py={1}
                  color={useColorModeValue("gray.900", "gray.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box> */}
              <Box py={4} px={12}>
                <Text fontWeight="500" fontSize="2xl">
                  E-Commerce
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    Start from
                  </Text>
                  <Text fontSize="4xl" fontWeight="900">
                    €959
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
                alignItems="flex-start"
              >
                <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                  Suitable for
                </Text>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Information display
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Selling products or services online
                  </ListItem>
                </List>
                <Divider />

                <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                  What you will get
                </Text>
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free ssl(for website security)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Fast host server
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Optimized SEO(Search Engine Optimization)
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Free domain for 1 years
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Ability to take payment online
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Client portal
                  </ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Custom site
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="4xl" fontWeight="900">
                  €1+
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("gray.50", "gray.700")}
              py={4}
              borderBottomRadius={"xl"}
              alignItems="flex-start"
            >
              <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                Suitable for
              </Text>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Information display
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Selling products or services online
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Any other custom features
                </ListItem>
              </List>
              <Divider />

              <Text fontSize="2xl" fontWeight="900" alignSelf="center">
                What you will get
              </Text>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free ssl(for website security)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Fast host server
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Optimized SEO(Search Engine Optimization)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Free domain for 1 years
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Whatever features you required
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Fully customizable website or app
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Source code
                </ListItem>
              </List>
            </VStack>
          </PriceWrapper>
        </Stack>
      </Box>
    </AppLayout>
  );
};

export default Services;
