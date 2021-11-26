import {
  Container,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { CgWebsite } from "react-icons/cg";
import { GrOptimize } from "react-icons/gr";
import { FcAdvertising } from "react-icons/fc";

import { Service } from "./Service";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <Container maxW={"5xl"} py={4}>
      <Stack spacing={4}>
        <Heading>End to end solutions</Heading>
        <Text color={"gray.500"} fontSize={"lg"}>
          I will take care of everything from site building to site promotion,
          and make sure your website is really working for you.
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
            icon={<Icon as={CgWebsite} color={"yellow.500"} w={5} h={5} />}
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            name={"Build your site"}
            features={[
              "mobile friendly",
              "fast",
              "reliable",
              "beautiful",
              "easy to customize",
              "accessible",
            ]}
          />
          <Service
            icon={<Icon as={GrOptimize} color={"green.500"} w={5} h={5} />}
            iconBg={useColorModeValue("green.100", "green.900")}
            name={"SEO optimization"}
            features={[
              "fast load",
              "interliked pages",
              "key words optimization",
              "SSL secure",
            ]}
          />
          <Service
            icon={<Icon as={FcAdvertising} color={"purple.500"} w={5} h={5} />}
            iconBg={useColorModeValue("purple.100", "purple.900")}
            name={"Digital marketing"}
            features={[
              "google ad",
              "facebook ad",
              "tik tok ad",
              "social media integration",
              "google analytics",
            ]}
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Services;
