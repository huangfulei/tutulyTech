import * as React from "react";
import { ReactElement } from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";

interface ServiceProps {
  name: string;
  features: string[];
  iconBg: string;
  icon?: ReactElement;
}

export const Service: React.FC<ServiceProps> = (props) => {
  const { name, features, icon, iconBg } = props;
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{name}</Text>
      <Flex wrap="wrap">
        {features.map((feature: string) => {
          return (
            <Text
              fontSize="sm"
              border="1px"
              borderRadius="3xl"
              p={1}
              m={1}
              key={feature}
            >
              {feature}
            </Text>
          );
        })}
      </Flex>
    </Stack>
  );
};
