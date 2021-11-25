import {
  Container,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { Service } from "./Service";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <Container maxW={"5xl"} py={16}>
      <Stack spacing={4}>
        <Heading>End to end solutions</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          I'm providing top tier software services, and full solutions for
          building and promoting your website.
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.100", "gray.700")}
            />
          }
        >
          <Service
            icon={
              <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
            }
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={"Business Planning"}
          />
          <Service
            icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
            iconBg={useColorModeValue("green.100", "green.900")}
            text={"Financial Planning"}
          />
          <Service
            icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
            iconBg={useColorModeValue("purple.100", "purple.900")}
            text={"Market Analysis"}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Services;
