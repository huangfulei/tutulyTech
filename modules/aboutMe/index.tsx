import {
  Box,
  Heading,
  Container,
  Text,
  Flex,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import animation from "./../../styles/animation.module.css";
import NextLink from "next/link";
interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  return (
    <Flex className={useColorModeValue("gradient_light", "gradient_dark")}>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            You deserve a <br />
            <Text color={"green.400"} className={animation["jello-horizontal"]}>
              better website
            </Text>
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            className={animation["bounce-in-top"]}
          >
            Hi! I’m Fulei Huang, a full stack software engineer currently
            working for Microsoft. Glad you find me here. I’m providing top tier
            software services, and full solutions for building and promoting
            your website.
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              className={animation["bounce-in-top"]}
            >
              <NextLink href={"/quote" ?? "#"} passHref>
                Get a Quote
              </NextLink>
            </Button>
            <Button
              variant={"link"}
              colorScheme={"blue"}
              size={"md"}
              className={animation["roll-in-blurred-left"]}
            >
              <NextLink href={"/services" ?? "#"} passHref>
                All Services
              </NextLink>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default AboutMe;
