import { SEO } from "../common/components/SEO";
import { AppLayout } from "./../modules/AppLayout";
import {
  Button,
  Select,
  Container,
  HStack,
  VStack,
  FormControl,
  NumberInputField,
  Heading,
  Input,
  NumberInput,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

const websiteTypes = ["Static info display", "E-commerce", "Custom webapp"];
interface QuoteProps {}

const Quote: React.FunctionComponent<QuoteProps> = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [budget, setBudget] = useState<string>();
  const [websiteType, setWebsiteType] = useState<string>();
  const [timeRequired, setTimeRequired] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submitted");
  };
  return (
    <AppLayout>
      <SEO />
      <Container maxW="5xl" mt={16}>
        <form onSubmit={handleSubmit}>
          <Heading textAlign="center" pb={6}>
            Get a Quote
          </Heading>
          <VStack>
            <HStack w="100%">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  value={name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                  }}
                  placeholder="Name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  value={email}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(event.target.value);
                  }}
                  placeholder="Email"
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Type of website</FormLabel>
              <Select
                placeholder="Select website type"
                value={websiteType}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setWebsiteType(event.target.value);
                }}
              >
                {websiteTypes.map((websiteType) => (
                  <option key={websiteType} value={websiteType}>
                    {websiteType}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>What is your budget?</FormLabel>
              <NumberInput
                allowMouseWheel
                min={0}
                precision={0}
                value={budget}
                onChange={(val) => {
                  setBudget(val);
                }}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                How soon would you like to get your website?
              </FormLabel>
              <Input
                value={timeRequired}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setTimeRequired(event.target.value);
                }}
                placeholder="eg. in X days/X weeks"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Describe your website</FormLabel>
              <Textarea
                value={desc}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setDesc(event.target.value);
                }}
                placeholder="eg. what pages do you want? what functionalities are required? "
              />
            </FormControl>
          </VStack>

          <Button colorScheme="blue" mt={4} type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </AppLayout>
  );
};

export default Quote;
