import * as React from "react";
import { ReactElement } from "react";
import { Stack, Flex, Text } from "@chakra-ui/react";

interface ServiceProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

export const Service: React.FC<ServiceProps> = (props) => {
  const { text, icon, iconBg } = props;
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
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};
