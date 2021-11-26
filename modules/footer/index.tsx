import { Text, useColorModeValue, Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      css={{
        backdropFilter: "saturate(180%) blur(5px)",
        backgroundColor: useColorModeValue(
          "rgba(255, 255, 255, 0.8)",
          "rgba(26, 32, 44, 0.8)"
        ),
      }}
      position="fixed"
      bottom="0"
      justifyContent="center"
      alignItems="center"
      w="100%"
    >
      <Text py={6} fontSize={"sm"}>
        Copyright 2021 @ TutulyTech
      </Text>
    </Flex>
  );
};
