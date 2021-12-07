import {
  Box,
  BoxProps,
  VStack,
  HStack,
  Heading,
  Select,
  FormControl,
  FormLabel,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { doc, getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/clientApp";
import { readDoc } from "./../firebase/firestore/read";
import { writeToDoc } from "./../firebase/firestore/write";

const allColors = ["red", "green", "blue.500"];

interface DemoProps {}

const Card = (props: BoxProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      rounded={{ md: "lg" }}
      shadow="base"
      overflow="hidden"
      {...props}
    />
  );
};

const Demo: React.FunctionComponent<DemoProps> = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  const getComponentSettings = async () => {
    await getDoc(doc(db, "cards", "demo"))
      // await readDoc("cards/demo")
      .then((demoCard) => {
        if (demoCard.exists()) console.log(demoCard.data());
        // setProperties(JSON.parse(demoCard.data()));
        // setBackgroundColor(demoCard.data());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await writeToDoc("cards/demo", backgroundColor);
  };

  useEffect(() => {
    getComponentSettings();
  }, []);

  return (
    <HStack>
      <VStack>
        <form onSubmit={handleSubmit}>
          <FormControl id="props">
            <FormLabel>Props</FormLabel>
            <Select
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setBackgroundColor(event.target.value);
              }}
            >
              {allColors.map((color) => {
                return (
                  <option key={color} value={color}>
                    {color}
                  </option>
                );
              })}
            </Select>
          </FormControl>
          <Button colorScheme="blue" mr={3} type="submit">
            Save
          </Button>
        </form>
      </VStack>
      <Card {...backgroundColor}>
        <Flex
          align="center"
          justify="space-between"
          px="6"
          py="4"
          borderBottomWidth="1px"
        >
          <Heading fontSize="lg">This is a demo</Heading>
        </Flex>
      </Card>
    </HStack>
  );
};

export default Demo;
