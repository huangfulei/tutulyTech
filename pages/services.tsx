import * as React from "react";
import Head from "next/head";
import { SplitWithImage } from "../common/components/features/SplitWithImage";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import LargeWithAppLinksAndSocial from "../common/components/footers/LargeWithAppLinksAndSocial";
import LargeWithLogoLeft from "../common/components/footers/LargeWithLogoLeft";
import LargeWithNewsletter from "../common/components/footers/LargeWithNewsletter";
import LargeWithLogoCentered from "../common/components/footers/LargeWithLogoCentered";
import SimpleThreeColumns from "../common/components/features/SimpleThreeColumns";
import GridListWithHeading from "../common/components/features/GridListWithHeading";
import GridBlurredBackdrop from "../common/components/testimonials/GridBlurredBackdrop";
import WithSpeechBubbles from "../common/components/testimonials/WithSpeechBubbles";
import ThreeTierPricing from "../common/components/pricing/ThreeTierPricing";
import BasicStatistics from "../common/components/statistics/BasicStatistics";
import StatisticsWithIcon from "../common/components/statistics/StatisticsWithIcon";
import Carousel from "../common/components/carousels/Carousel";
import WithSubNavigation from "../common/components/navbars/WithSubNavigation";
import SidebarWithHeader from "../common/components/navbars/SidebarWithHeader";
import Contact from "../common/components/contact/Contact";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
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

export default Services;
