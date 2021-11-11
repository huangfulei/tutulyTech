import type { NextPage } from "next";
import Head from "next/head";
import { SplitWithImage } from "../components/features/SplitWithImage";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import LargeWithAppLinksAndSocial from "../components/footers/LargeWithAppLinksAndSocial";
import LargeWithLogoLeft from "./../components/footers/LargeWithLogoLeft";
import LargeWithNewsletter from "./../components/footers/LargeWithNewsletter";
import LargeWithLogoCentered from "./../components/footers/LargeWithLogoCentered";
import SimpleThreeColumns from "./../components/features/SimpleThreeColumns";
import GridListWithHeading from "./../components/features/GridListWithHeading";
import GridBlurredBackdrop from "./../components/testimonials/GridBlurredBackdrop";
import WithSpeechBubbles from "./../components/testimonials/WithSpeechBubbles";
import ThreeTierPricing from "./../components/pricing/ThreeTierPricing";
import BasicStatistics from "./../components/statistics/BasicStatistics";
import StatisticsWithIcon from "./../components/statistics/StatisticsWithIcon";
import Carousel from "./../components/carousels/Carousel";
import WithSubNavigation from "./../components/navbars/WithSubNavigation";
import SidebarWithHeader from "./../components/navbars/SidebarWithHeader";
import Contact from "./../components/contact/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tutuly Tech</title>
        <meta name="keywords" content="development" />
      </Head>
      <Box>
        <Text>Features</Text>
        <SplitWithImage />
        <SimpleThreeColumns />
        <GridListWithHeading />
        <Text>Footers</Text>
        <LargeWithAppLinksAndSocial />
        <LargeWithLogoLeft />
        <LargeWithNewsletter />
        <LargeWithLogoCentered />
        <Text>Testimonials</Text>
        <GridBlurredBackdrop />
        <WithSpeechBubbles />
        <Text>Pricing</Text>
        <ThreeTierPricing />
        <Text>Statistics</Text>
        <BasicStatistics />
        <StatisticsWithIcon />
        <Text>Carousel</Text>
        <Carousel />
        <Text>Nav Bar</Text>
        <WithSubNavigation />
        <SidebarWithHeader
          {...{ children: <Text>place holder element</Text> }}
        />
        <Text>Contact</Text>
        <Contact />
      </Box>
    </div>
  );
};

export default Home;
