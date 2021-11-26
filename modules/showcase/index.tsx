import CaseCard from "./CaseCard";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

interface ShowcaseProps {}

const works = [
  {
    name: "Pomotrack",
    url: "https://pomotrack.com",
    desc: "A web application using Pomodoro technique manages your tasks and time",
    previewImg:
      "https://firebasestorage.googleapis.com/v0/b/tutulytech.appspot.com/o/pomotrack.jpg?alt=media&token=4797e215-73fb-45e3-8ece-d76f38306dbd",
  },
  {
    name: "QLeaf Clean",
    url: "https://qleafclean.com",
    desc: "Information display website for QLeaf Clean company",
    previewImg:
      "https://firebasestorage.googleapis.com/v0/b/tutulytech.appspot.com/o/qleafclean.jpg?alt=media&token=713c2401-eb0a-4e15-a531-c36a6d62aabf",
  },
];
const Showcase: React.FunctionComponent<ShowcaseProps> = (props) => {
  return (
    <Container maxW={"5xl"} py={4}>
      <Heading>Some of my work</Heading>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        my={16}
        mx={"auto"}
      >
        {works.map((work, index) => {
          return (
            <CaseCard
              key={work.name}
              index={index}
              name={work.name}
              url={work.url}
              desc={work.desc}
              previewImg={work.previewImg}
            />
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Showcase;
